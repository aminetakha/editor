import { ADD_BLOCK, CHANGE_BLOCK_TYPE, REMOVE_BLOCK } from "../types";

const initialState = {
  blocks: [
    {
      id: Math.random(),
      type: "paragraph",
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
      const new_blocks =
        state.blocks.length > 1
          ? state.blocks.filter((block) => block.id !== payload)
          : state.blocks;
      return {
        ...state,
        blocks: new_blocks,
      };

    case CHANGE_BLOCK_TYPE:
      const updated_block_type = state.blocks.map((block) => {
        if (block.id === payload.blockId) {
          if (block.type === "image") {
            return { ...block, type: payload.type, value: "" };
          }
          return { ...block, type: payload.type, value: payload.blockValue };
        }
        return block;
      });
      return {
        ...state,
        blocks: updated_block_type,
      };
    default:
      return state;
  }
};
