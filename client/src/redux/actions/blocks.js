import {
  ADD_BLOCK,
  CHANGE_BLOCK_TYPE,
  REMOVE_BLOCK,
  SELECT_BLOCK,
} from "../types";

export const selectedBlock = (blockId) => (dispatch) => {
  dispatch({ type: SELECT_BLOCK, payload: blockId });
};

export const addBlock = (data) => (dispatch) => {
  dispatch({ type: ADD_BLOCK, payload: data });
};

export const removeBlock = (blockId) => (dispatch) => {
  dispatch({ type: REMOVE_BLOCK, payload: blockId });
};

export const changeBlockType = (blockId, blockValue, type) => (dispatch) => {
  dispatch({ type: CHANGE_BLOCK_TYPE, payload: { blockId, blockValue, type } });
};
