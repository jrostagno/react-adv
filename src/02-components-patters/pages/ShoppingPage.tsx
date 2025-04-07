import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";

import { products } from "../data/product";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={`p_${product.id}`}
        product={product}
        initialValues={{
          maxCount: 10,
          count: 4,
        }}
      >
        {({ reset, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
