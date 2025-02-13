import { CartItem } from "@/types/type";
import { Button } from "../ui/button";
import CartCardItem from "../cart/CartCard";

interface CartItemsProps {
  carts: CartItem[];
  onClickItem: (cart: CartItem) => void;
  onClickSeeProducts: () => void;
}

const CartItemList = ({
  carts,
  onClickItem,
  onClickSeeProducts,
}: CartItemsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        {carts.map((cart, index) => (
          <CartCardItem
            key={index}
            cart={cart}
            onClick={() => onClickItem(cart)}
          />
        ))}
      </div>
      <div className="items-center">
        <Button
          onClick={() => {
            onClickSeeProducts();
          }}
        >
          Continue to shopping
        </Button>
      </div>
    </div>
  );
};

export default CartItemList;
