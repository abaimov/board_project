import React from "react";
import styles from "../header/Header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <div className={styles["logo"]}>Барохло</div>

        <div className={styles["items"]}>
          <div>items</div>
          <div>Myfavourites</div>
        </div>

        <div className={styles["user_panel"]}>
          <div>флаг</div>
          <div>сообщение</div>
          <div>аватар</div>
        </div>
      </header>
    </div>
  );
}
