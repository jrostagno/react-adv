import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";

import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
  const {
    handleClick: increaseBy,
    counter,
    maxCount,
  } = useContext(ProductContext);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={
          counter === maxCount
            ? `${styles.disable} ${styles.buttonAdd}`
            : `${styles.buttonAdd}`
        }
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
