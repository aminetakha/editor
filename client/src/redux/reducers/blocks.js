import { ADD_BLOCK, REMOVE_BLOCK } from "../types";

const initialState = {
  blocks: [
    {
      id: Math.random(),
      type: "paragraph",
      value: "",
    },
    {
      id: Math.random(),
      type: "heading",
      level: "h2",
      value: "",
    },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BLOCK:
      const updated_blocks = state.blocks.map((block) => {
        if (block.id === payload.blockId) {
          return {
            ...block,
            value: payload.value,
          };
        }
        return block;
      });
      updated_blocks.push({
        id: Math.random(),
        type: "paragraph",
        value: "",
      });
      return {
        ...state,
        blocks: updated_blocks,
      };

    case REMOVE_BLOCK:
      const new_blocks = state.blocks.filter((block) => block.id !== payload);
      return {
        ...state,
        blocks: new_blocks,
      };
    default:
      return state;
  }
};
