const initialState = [
  {
    id: 1,
    pedido: "Cachorro quente",
    descricao: "Remover milho",
    tempo: "1 hora",
  },

  {
    id: 2,
    pedido: "Hamburguer",
    descricao: "Remover salada",
    tempo: "2 hora",
  },
];

const produtos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      return [...state, action.payload];
    case "REMOVE_TODO":
      let aux = state.filter((el) => el.id !== action.payload);
      return aux;
    default:
      return state;
  }
};

export default produtos;
