import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error-page section">
        <div className="error-container">
          <h1>Damn! You reached a dead end <span role="img" aria-label="emoji">😐</span></h1>
          <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
      </section>
    </>
  )
}

export default Error