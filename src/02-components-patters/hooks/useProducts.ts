import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  OnChangeArgsProps,
  Product,
} from "../interfaces/interfaces";

interface Props {
  onChange?: (value: OnChangeArgsProps) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
}
export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const handleClick = (value: number) => {
    const newValue = Math.max(value + counter, 0);

    if (initialValues?.maxCount && newValue > initialValues.maxCount) return;
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    setCounter(value);
  }, [value]);

  return {
    handleClick,
    counter,
    maxCount: initialValues?.maxCount,
    reset: reset,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
  };
};
