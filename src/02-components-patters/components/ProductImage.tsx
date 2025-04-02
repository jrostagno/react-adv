import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = (props: Props) => {
  const { img = "", className } = props;
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
      src={imageToShow}
      alt="Cofee mug"
    />
  );
};
