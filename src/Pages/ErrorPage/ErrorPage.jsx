import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>Oops!</h1>
        <h2 style={styles.title}>Something went wrong</h2>

        <p style={styles.message}>
          {error?.statusText || error?.message || "Unexpected error occurred"}
        </p>

        <Link to="/" style={styles.button}>
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "90%",
  },
  code: {
    fontSize: "48px",
    marginBottom: "10px",
    color: "#ff4d4f",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  message: {
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    background: "#667eea",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default ErrorPage;