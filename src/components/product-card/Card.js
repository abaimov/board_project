import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import styles from "../product-card/Card.scss";

export default function Card() {
  return (
    <div className={styles["container"]}>
      <div className={styles["card_image"]}>
        <img
          src="https://htstatic.imgsmail.ru/pic_image/2f86a21b5a7b15dc7f932b8982c07317/450/450/1339893/"
          alt=""
        />
      </div>
      <div className={styles["card_info"]}>
        <div>
          <div className={styles["bookmark"]}>
            <div>
              <h2>Nokia 3250 </h2>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faBookmark}
                size="lg"
                color="blue"
                border
                swapOpacity
              />
            </div>
          </div>

          <div className={styles["card_description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim
            maiores earum nesciunt, mollitia, rerum perspiciatis molestiae
            eligendi, error quod dolorem ipsum nam? Eaque inventore possimus,
            libero sint labore quae.
          </div>

          <div className={styles["next_info"]}>
            <div>
              <div>состояние: 7/10</div>
              <div>до завершения: 2д, 3ч</div>
              <div>следят: 9 человек</div>
            </div>
            <div>
              <div>$399</div>
              <button>сделать ставку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
