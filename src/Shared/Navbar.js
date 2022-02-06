import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const HanlderLogout = () => {
    navigate("/login", {
      replace: true,
    });
    console.log("Clicket log out");
  };
  const HandlerActiveClass = (IsActive) => {};
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ml-5">
      <Link className="navbar-brand" to="/">
        Universe
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            to="/marvel"
            className={({ isActive }) => {
              let _class =
                isActive == true
                  ? "nav-item nav-link active"
                  : "nav-item nav-link";
              return _class;
            }}
          >
            Marvel
          </NavLink>

          <NavLink
            to="/dc"
            className={({ isActive }) => {
              let _class =
                isActive == true
                  ? "nav-item nav-link active"
                  : "nav-item nav-link";
              return _class;
            }}
          >
            DC
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) => {
              let _class =
                isActive == true
                  ? "nav-item nav-link active"
                  : "nav-item nav-link";
              return _class;
            }}
          >
            Busqueda
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            Leudi, Rosario Cleto
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={HanlderLogout}
            to="/login"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
