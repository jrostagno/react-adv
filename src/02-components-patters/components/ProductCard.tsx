import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";

import { createContext, CSSProperties } from "react";
import {
  InitialValues,
  OnChangeArgsProps,
  Product,
  ProductCardCHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardCHandlers) => React.JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgsProps) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = (props: Props) => {
  const {
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues,
  } = props;

  const {
    handleClick: increaseBy,
    counter,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProducts({
    product,
    onChange,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        handleClick: increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={` ${styles.productCard} ${className}`}>
        {children({
          product,
          increaseBy,
          count: counter,
          isMaxCountReached: isMaxCountReached,
          reset: reset,
          maxCount: initialValues?.maxCount,
        })}
      </div>
    </Provider>
  );
};
