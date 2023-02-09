import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login", {
      replace: true,
    });
  };

  const logged = JSON.parse(localStorage.getItem("logged"));

  return (
    <>
      <header>
        <h1>
          <Link to="/">TechStore</Link>
        </h1>

        {logged ? (
          <>
            <ul className="nav-admin">
              <li>
                <Link to="/admin/products">Productos</Link>
              </li>
              <li>
                <Link to="/admin/users">Usuarios</Link>
              </li>
              <li>
                <Link to="/admin/customers">Consumidores</Link>
              </li>
              <li>
                <Link to="/admin/invoices">Facturas</Link>
              </li>
            </ul>
            <div className="user">
              <span className="username">{state?.name}</span>
              <button className="btn-logout" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
          </>
        ) : (
          <nav>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
