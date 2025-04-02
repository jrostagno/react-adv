import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import "../styles/customs-styles.css";

const product = {
  id: "1",
  title: "Coffee mug",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard className="bg-dark" product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title
            title={"Hola Mun"}
            className="text-white text-bold"
          />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard className="bg-dark" product={product}>
          <ProductImage className="custom-image" img={product.img} />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="button-container" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
