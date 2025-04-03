import { useEffect, useState, useRef } from "react";
import { OnChangeArgsProps, Product } from "../interfaces/interfaces";

interface Props {
  onChange?: (value: OnChangeArgsProps) => void;
  product: Product;
  value?: number;
}
export const useProducts = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);
  const handleClick = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(value + counter, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    handleClick,
    counter,
  };
};
