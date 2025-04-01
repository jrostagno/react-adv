import React from "react";
import { ReactElement } from "react";

export interface ProductsCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  handleClick: (value: number) => void;
  counter: number;
}

export interface ProductCardHOCProps {
  (props: ProductsCardProps): React.JSX.Element;
  Title: ({ title }: { title?: string }) => React.JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => React.JSX.Element;
  Buttons: () => React.JSX.Element;
}
