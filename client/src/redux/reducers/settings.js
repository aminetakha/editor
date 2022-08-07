import { SWITCH_BLOCK_TYPE } from "../types";

const initialState = {
  selectedType: "paragraph",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_BLOCK_TYPE:
      return {
        ...state,
        selectedType: payload,
      };
    default:
      return state;
  }
};
