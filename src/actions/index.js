import { ADD_TODO, REMOVE_TODO } from "./actionTypes";
export const addProduct = (value) => ({
  type: ADD_TODO,
  payload: value,
});

export const removeProduct = (value) => ({
  type: REMOVE_TODO,
  payload: value,
});
