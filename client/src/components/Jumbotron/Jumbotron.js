import React from "react";
import "./Jumbotron.css";

function Jumbotron ({children}) {
  return (
    <div className="jumbotron jumbotron-fluid d-flex alight-items-center">
        <div className="container text-center">
            {children}
        </div>
    </div>
  );
}

export default Jumbotron;
