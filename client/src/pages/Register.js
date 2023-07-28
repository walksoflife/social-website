import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineFacebook } from "react-icons/ai";
import makeRequest from "../services/makeRequest";
import { setError, validateRegisterForm } from "../services/validate";
import Loading from "../components/loadings/Loading";
import Footer from "../components/footer/Footer";

const Register = () => {
  const { successMessage, errorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const refForm = useRef(null);
  const refEmail = useRef(null);
  const refName = useRef(null);
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      name,
      username,
      password,
      confirmPassword,
    };

    validateRegisterForm(
      refEmail,
      refName,
      refUsername,
      refPassword,
      refConfirmPassword
    );

    await makeRequest
      .post("/auth/register", data)
      .then((res) => {
        successMessage(res.data.message);
        setLoading(false);
        navigate("/accounts/login");
      })
      .catch((res) => {
        let err = res.response.data.error;
        if (err.status === 409) {
          setError(refEmail.current, err.message);
        } else if (err.status === 406) {
          setError(refUsername.current, err.message);
        } else {
          errorMessage("Something went wrong...");
        }
        setLoading(false);
      });
  };

  return (
    <div className="register">
      <div className="register-container">
        {loading && <Loading />}
        <div className="register-right-top">
          <h2>Keepstory</h2>
          <p
            style={{
              marginBottom: "20px",
              padding: "0 60px",
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
            }}
          >
            Sign up to see photos and videos from your friends.
          </p>

          <p className="register-with-fb">
            <AiOutlineFacebook
              style={{
                fontSize: "20px",
              }}
            />
            Log in with Facebook
          </p>
          <p className="form-or">OR</p>
          <form className="form-register" ref={refForm}>
            <div className="form-register-group">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={refEmail}
              />
              <p className="form-err"></p>
            </div>
            <div className="form-register-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={refName}
              />
              <p className="form-err"></p>
            </div>
            <div className="form-register-group">
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ref={refUsername}
              />
              <p className="form-err"></p>
            </div>
            <div className="form-register-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={refPassword}
              />
              <p className="form-err"></p>
            </div>
            <div className="form-register-group">
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ref={refConfirmPassword}
              />
              <p className="form-err"></p>
            </div>
            <p className="form-infor">
              People who use our service may have uploaded your contact
              information to Instagram
            </p>
            <p className="form-infor">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <button onClick={handleRegister} className="register-btn">
              Sign up
            </button>
          </form>
        </div>

        <div className="register-right-bottom">
          <span>Have an account?</span>
          <Link to="/accounts/login" className="link">
            <span>Log in</span>
          </Link>
        </div>

        <p style={{ fontSize: "14px", textAlign: "center", margin: "20px 0" }}>
          Get the app.
        </p>

        <div className="register-app">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt=""
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
