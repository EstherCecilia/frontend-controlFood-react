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
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default produtos;
