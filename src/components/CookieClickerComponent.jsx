import { useState } from "react";
import styles from "../styles/CookieClicker.module.css";

export default function CookieClickerComponent() {
  const [point, setPoint] = useState(0);

  return (
    <div className={styles.container}>
      <h3>{point}</h3>
      <button
        className={styles.cookieBtn}
        onClick={() => setPoint((prev) => prev + 1)}
      >
        <img
          src="./cookie.png"
          alt="Image of a Cookie"
          className={styles.cookie}
        />
      </button>
      <button className={styles.resetCtrBtn} onClick={() => setPoint(0)}>
        Reset Counter
      </button>
    </div>
  );
}
