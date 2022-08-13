import React from "react";
import styles from "./Settings.module.css";
import { settings } from "../../utils/settings";

const Settings = ({ settingChange }) => {
  const renderSettings = () => (
    <ul>
      {Object.keys(settings).map((setting) => (
        <li key={setting} onClick={() => settingChange(setting)}>
          {settings[setting].label}
        </li>
      ))}
    </ul>
  );
  return <div className={styles.settings_container}>{renderSettings()}</div>;
};

export default Settings;
