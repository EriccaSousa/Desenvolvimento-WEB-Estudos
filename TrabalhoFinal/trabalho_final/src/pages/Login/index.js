import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import "../../global.css";
import "./styles.css";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <form>
          <h1> Faça seu logon </h1>

          <input placeholder="Seu email"/>
          <input placeholder="Sua senha"/>

          <button className="button" type="submit">
            Entrar
          </button>
          <a href="/">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
    </div>
  );
}