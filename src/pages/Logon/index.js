import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.png";

import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  const history = useHistory();
  const [state, setstate] = useState(undefined);

  function handleLogin() {
    localStorage.setItem("ongId", state);
    history.push("/procfile");
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="logo" />
        <form action="">
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            onChange={(e) => setstate(e.target.value)}
          />
          <button className="button" onClick={handleLogin} type="submit">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="imagem" />
    </div>
  );
}
