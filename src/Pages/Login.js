import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const singIng = () => {
    localStorage.setItem("user", "true");
    navigate("/", { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <div className="d-grid gap-2 mt-5">
        <button className="btn btn-outline-primary btn-block" onClick={singIng}>
          Entrar
        </button>
      </div>
    </div>
  );
};
