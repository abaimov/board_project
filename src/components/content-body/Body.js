import React from "react";
import Card from "../product-card/Card";
import styles from "../content-body/Body.scss";

export default function Body() {
  return (
    <div className={styles["container"]}>
      <div className={styles["new_add_container"]}>
        <Card />
      </div>
      <div className={styles["add_info"]}>hello</div>
    </div>
  );
}
