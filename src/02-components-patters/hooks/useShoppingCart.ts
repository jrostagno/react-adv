import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        const newValue = productInCart.count + count;

        return {
          ...oldShoppingCart,
          [product.id]: { ...product, count: newValue },
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      return rest;
      //   if (count === 0) {
      //     //opcion desestructuracion del objeto
      //     // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //     // console.log(toDelete);
      //     // return rest;
      //     delete oldShoppingCart[product.id];
      //     return { ...oldShoppingCart };
      //   }
      //   return {
      //     ...oldShoppingCart,
      //     [product.id]: { ...product, count },
      //   };
    });
  };

  return {
    shoppingCart,
    onProductCartChange,
  };
};
