import { useCart } from "../../CartContext";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
function CartWidget() {
  const { cartQuantity } = useCart();

  return (
    <div className="cart=widget">
      <FiShoppingCart size={30} color="gray" />
      <p>{cartQuantity()}</p>
    </div>
  );
}

export default CartWidget;
