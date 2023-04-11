import { Link } from "react-router-dom";

export const ProductsShow = ({ product, handleClick, addItem }) => {
  return (
    <div
      className="card my-4 text-center card-hover pointer"
      style={{ width: "21rem" }}
    >
      <Link
        to={`/products/${product.id}`}
        className="text-dark text-decoration-none"
        onClick={() => handleClick(product)}
      >
        <img
          src={product.image}
          className="card-img-top "
          alt="..."
          height="300px"
        />
        <div className="card-body">
          <div className="cart-title">
            <h6 className="card-title">{product.title}</h6>
            <span className="card-text">{product.price} $</span>
          </div>
        </div>
      </Link>
      <div className="px-3 mb-3">
        <button
          onClick={() => addItem(product)}
          className="btn text-white w-100 mx-auto mainColor added"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
