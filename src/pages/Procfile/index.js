import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { FaRegGrimace } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { addProduct, removeProduct } from "../../actions";

import "./styles.css";

import Modal from "../NewPedido";

import logoImg from "../../assets/logo.png";

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const state = useSelector((state) => state.reducer);

  useEffect(() => {
    setPedidos(state);
  }, [state]);

  const ongId = localStorage.getItem("ongId");

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  function handleRemove({ key }) {
    dispatch(removeProduct(key));
  }

  function handleAdicionar({ pedido, descricao, id }) {
    dispatch(addProduct({ id, pedido, descricao, tempo: "1 hora" }));
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero Logo" />
        <span>Bem vinda, {ongId} </span>
        <Link className="button" onClick={() => setOpen(true)}>
          Novo pedido
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#FFF" />
        </button>
      </header>

      <h1>Pedidos cadastrados</h1>
      <ul>
        {pedidos.map((element, key) => (
          <li key={element.id}>
            <strong className="ml-2">PEDIDO:</strong>

            <p>{element.pedido}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{element.descricao}</p>

            <strong>TEMPO:</strong>
            <p>{element.tempo}</p>

            <div className="buttonIcon">
              <FaRegGrimace size={20} color="#a8a8b3" />
              <FiTrash2
                size={20}
                className="trash"
                color="#a8a8b3"
                onClick={() => handleRemove({ key: element.id })}
              />
            </div>
          </li>
        ))}
      </ul>
      <Modal
        open={open}
        handleCLose={() => setOpen(false)}
        handleAdicionar={handleAdicionar}
      />
    </div>
  );
}
