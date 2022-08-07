import { ADD_BLOCK, REMOVE_BLOCK, SELECT_BLOCK } from "../types";

export const selectedBlock = (blockId) => (dispatch) => {
  dispatch({ type: SELECT_BLOCK, payload: blockId });
};

export const addBlock = (data) => (dispatch) => {
  dispatch({ type: ADD_BLOCK, payload: data });
};

export const removeBlock = (blockId) => (dispatch) => {
  dispatch({ type: REMOVE_BLOCK, payload: blockId });
};
