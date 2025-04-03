import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";

import "../styles/customs-styles.css";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";

const ShoppingPage = () => {
  const { shoppingCart, onProductCartChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((produc) => (
          <ProductCard
            key={`p_${produc.id}`}
            className="bg-dark text-white"
            value={shoppingCart[produc.id]?.count || 0}
            product={produc}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="button-container" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart) &&
          Object.entries(shoppingCart).length > 0 &&
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              value={product.count}
              className="bg-dark text-white"
              product={product}
              style={{ width: "100px" }}
              onChange={onProductCartChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="button-container" />
            </ProductCard>
          ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
