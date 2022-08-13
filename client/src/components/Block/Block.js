import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBlock,
  changeBlockType,
  removeBlock,
  selectedBlock,
} from "../../redux/actions/blocks";
import Settings from "../Settings/Settings";
import styles from "./Block.module.css";

const Block = ({ block }) => {
  const [showSettings, setShowSettngs] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
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
    contentContainer.current?.focus();
  }, []);

  const renderBlock = (block) => {
    if (block.type === "paragraph") {
      return (
        <p
          ref={contentContainer}
          contentEditable="true"
          className={styles.editable_container}
          onKeyDown={onKeyDownHandler}
          onFocus={onFocusHandler}
          suppressContentEditableWarning={true}
        >
          {block.value}
        </p>
      );
    } else if (block.type === "header") {
      return (
        <h1
          ref={contentContainer}
          contentEditable="true"
          className={styles.editable_container}
          onKeyDown={onKeyDownHandler}
          suppressContentEditableWarning={true}
          onFocus={onFocusHandler}
        >
          {block.value}
        </h1>
      );
    } else if (block.type === "image") {
      return (
        <Fragment>
          <div>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          {imageUrl && (
            <div
              ref={contentContainer}
              contentEditable="true"
              className={styles.editable_container}
              onKeyDown={onKeyDownHandler}
              onFocus={onFocusHandler}
              suppressContentEditableWarning={true}
            >
              <img src={imageUrl} width="250px" />
            </div>
          )}
        </Fragment>
      );
    }
  };

  const settingChangeHandler = (setting) => {
    dispatch(
      changeBlockType(
        block.id,
        contentContainer.current.textContent ?? "",
        setting
      )
    );
    setShowSettngs(false);
  };

  return (
    <div className={styles.block_container}>
      <div className={styles.block_settings}>
        <div
          className={styles.add_icon_container}
          onClick={() => setShowSettngs(!showSettings)}
        >
          <span className={styles.add_icon}>+</span>
        </div>
        {showSettings && (
          <Settings block={block} settingChange={settingChangeHandler} />
        )}
      </div>
      {renderBlock(block)}
    </div>
  );
};

export default Block;
