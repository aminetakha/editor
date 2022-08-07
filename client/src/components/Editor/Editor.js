import React from "react";
import { useSelector } from "react-redux";
import Block from "../Block/Block";
import styles from "./Editor.module.css";

const Editor = () => {
  const { blocks } = useSelector((state) => state.blocks);
  return (
    <div className={styles.editor}>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Editor;
