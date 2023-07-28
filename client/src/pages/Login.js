import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import makeRequest from "../services/makeRequest";
import { setError, validateLoginForm } from "../services/validate";
import Loading from "../components/loadings/Loading";
import Footer from "../components/footer/Footer";

const Login = () => {
  const { setCurrentUser, successMessage, errorMessage } =
    useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const refEmail = useRef(null);  
  const refPassword = useRef(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    validateLoginForm(refEmail, refPassword);

    await makeRequest
      .post("/auth/login", { email, password })
      .then((res) => {
        setCurrentUser(res.data.user);
        successMessage(res.data.message);
        navigate("/");
      })
      .catch((res) => {
        let err = res.response.data.error;
        if (err.status === 404) {
          setError(refEmail.current, err.message);
        } else if (err.status === 401) {
          setError(refPassword.current, err.message);
        } else {
          errorMessage("Something went wrong...");
        }
        setLoading(false);
      });
  };

  const imgs = [
    "https://res.cloudinary.com/djqxdscwh/image/upload/v1687596237/screenshot1_tauclg.png",
    "https://res.cloudinary.com/djqxdscwh/image/upload/v1687596251/screenshot3_hdpmrk.png",
    "https://res.cloudinary.com/djqxdscwh/image/upload/v1687596244/screenshot2_z0fucx.png",
    "https://res.cloudinary.com/djqxdscwh/image/upload/v1687596257/screenshot4_btlvy0.png",
  ];

  const slideRef = useRef(null);
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    index === imgs.length - 1 ? setIndex(0) : setIndex(index + 1);
  }, 1500);

  return (
    <div className="login">
      <div className="login-container">
        {loading && <Loading />}
        <div className="login-left" ref={slideRef}>
          <img src={imgs[index]} alt="" />
        </div>
        <div className="login-right">
          <div className="login-right-top">
            <h2>Keepstory</h2>
            <form className="form-login">
              <div className="form-login-group">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={refEmail}
                />
                <p className="form-err"></p>
              </div>
              <div className="form-login-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={refPassword}
                />
                <p className="form-err"></p>
              </div>
              <button onClick={handleLogin} className="login-btn">
                Log in
              </button>
            </form>
            <p className="form-or">OR</p>

            <p className="login-with-fb">
              <AiOutlineFacebook
                style={{
                  background: "#385185",
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              Log in with Facebook
            </p>

            <p className="form-forgot-pw">Forgot password?</p>
          </div>

          <div className="login-right-bottom">
            <span>Don't have an account?</span>
            <Link to="/accounts/sign-up" className="link">
              <span>Sign up</span>
            </Link>
          </div>

          <p
            style={{ fontSize: "14px", textAlign: "center", margin: "20px 0" }}
          >
            Get the app.
          </p>

          <div className="login-app">
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
      </div>
      <Footer />
    </div>
  );
};

export default Login;
