import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";

import { createContext, ReactElement, CSSProperties } from "react";
import {
  OnChangeArgsProps,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgsProps) => void;
  value?: number;
}

export const ProductCard = (props: Props) => {
  const { product, children, className, style, onChange, value } = props;

  const { handleClick, counter } = useProducts({ product, onChange, value });
  return (
    <Provider
      value={{
        counter,
        handleClick,
        product,
      }}
    >
      <div style={style} className={` ${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
