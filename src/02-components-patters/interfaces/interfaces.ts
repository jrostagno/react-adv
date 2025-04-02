import React from "react";

import { Props as ProductsCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

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
  Title: (Props: ProductTitleProps) => React.JSX.Element;
  Image: (Props: ProductImageProps) => React.JSX.Element;
  Buttons: (Props: ProductButtonsProps) => React.JSX.Element;
}
