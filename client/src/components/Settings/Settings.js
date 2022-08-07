import React, { Fragment } from "react";
import styles from "./Settings.module.css";
import { settings } from "../../utils/settings";

const Settings = () => {
  const renderSettings = () => (
    <ul>
      {Object.keys(settings).map((setting) => (
        <li key={setting} onClick={() => console.log(setting)}>
          {settings[setting].label}
        </li>
      ))}
    </ul>
  );
  return <div className={styles.settings_container}>{renderSettings()}</div>;
};

export default Settings;
