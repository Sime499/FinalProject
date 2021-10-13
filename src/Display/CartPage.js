import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { useEffect } from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Page</h1>
      <p>
        ADD TO CART :ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}
