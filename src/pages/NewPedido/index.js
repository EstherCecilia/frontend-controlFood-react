import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { FaTimes } from "react-icons/fa";
import imageMenu from "../../assets/menu.jpg";
import "./styles.css";

const PEDIDO = [
  { id: "b_che_1", label: "Bacon Chessburguer" },
  { id: "ch_h_1", label: " Chessburguer Duplo" },
];

export default function AlertDialog({ open, handleCLose, handleAdicionar }) {
  const [menu, setMenu] = useState(false);
  const [pedido, setPedido] = useState(undefined);
  const [descricao, setDescricao] = useState("Sem descrição");

  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!pedido || pedido === "none") {
      alert("Selecione um pedido");
    }
    let id = PEDIDO.find((el) => el.id === pedido);
    handleAdicionar({ pedido: id.label, descricao, id: id.id });
    handleCLose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleCLose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <FaTimes
        size={20}
        color="#a8a8b3"
        className="icon"
        onClick={handleCLose}
      />
      <form>
        {menu ? (
          <img src={imageMenu} alt="menu" />
        ) : (
          <>
            <select name="Peidido" onChange={(e) => setPedido(e.target.value)}>
              <option value="none">Selecione um pedido</option>
              {PEDIDO.map((el) => (
                <option value={el.id}>{el.label}</option>
              ))}
            </select>

            <textarea
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </>
        )}

        <div className="d-flex justify-content-between">
          <button
            className="button cardapio"
            type="submit"
            onClick={handleMenu}
          >
            {menu ? "Ocultar" : "Cardapio"}
          </button>
          <button className="button" type="submit" onClick={handleAdd}>
            Cadastrar
          </button>
        </div>
      </form>
    </Dialog>
  );
}
