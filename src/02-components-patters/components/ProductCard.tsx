import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";

import { createContext } from "react";
import {
  ProductContextProps,
  ProductsCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = (props: ProductsCardProps) => {
  const { product, children } = props;

  const { handleClick, counter } = useProducts();
  return (
    <Provider
      value={{
        counter,
        handleClick,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
