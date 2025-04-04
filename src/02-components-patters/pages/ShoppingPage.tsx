import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";

import "../styles/customs-styles.css";
import { products } from "../data/product";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={`p_${product.id}`}
        className="bg-dark text-white"
        product={product}
        initialValues={{
          maxCount: 10,
          count: 4,
        }}
      >
        {({ reset, increaseBy, count }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="button-container" />

            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(2)}>+2</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
