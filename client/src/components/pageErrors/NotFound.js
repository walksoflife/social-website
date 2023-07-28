import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="not-found"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "24px", margin: "30px 0" }}>
        Sorry, this page isn't available.
      </h2>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <Link to="/" style={{ marginLeft: "5px", fontWeight: 500 }}>
          Go back to Keepstory.
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
