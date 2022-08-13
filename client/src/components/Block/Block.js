import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBlock,
  removeBlock,
  selectedBlock,
} from "../../redux/actions/blocks";
import Settings from "../Settings/Settings";
import styles from "./Block.module.css";

const Block = ({ block }) => {
  const [showSettings, setShowSettngs] = useState(false);
  const dispatch = useDispatch();
  const contentContainer = useRef();

  const onFocusHandler = (e) => {
    dispatch(selectedBlock(block.id));
  };

  const onKeyDownHandler = (e) => {
    if (
      e.key === "Backspace" &&
      contentContainer.current.textContent.length === 0
    ) {
      dispatch(removeBlock(block.id));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(
        addBlock({
          blockId: block.id,
          value: contentContainer.current.textContent,
        })
      );
      return false;
    }
  };

  useEffect(() => {
    contentContainer.current.focus();
  }, []);

  return (
    <div className={styles.block_container}>
      <div className={styles.block_settings}>
        <div
          className={styles.add_icon_container}
          onClick={() => setShowSettngs(!showSettings)}
        >
          <span className={styles.add_icon}>+</span>
        </div>
        {showSettings && <Settings />}
      </div>
      <div
        ref={contentContainer}
        contentEditable="true"
        className={styles.editable_container}
        onKeyDown={onKeyDownHandler}
        onFocus={onFocusHandler}
      ></div>
    </div>
  );
};

export default Block;
