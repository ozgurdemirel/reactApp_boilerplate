import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Devoteam Administration</h1>
      <p>React, Flux. and React Router for ultra-responsive web apps</p>
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomePage;
