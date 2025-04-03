import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = (props: Props) => {
  const { img = "", className, style } = props;
  const { product } = useContext(ProductContext);

  let imageToShow: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className} `}
      style={style}
      src={imageToShow}
      alt="Cofee mug"
    />
  );
};
