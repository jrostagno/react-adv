import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";

import { createContext, ReactElement } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = (props: Props) => {
  const { product, children, className } = props;

  const { handleClick, counter } = useProducts();
  return (
    <Provider
      value={{
        counter,
        handleClick,
        product,
      }}
    >
      <div className={` ${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
