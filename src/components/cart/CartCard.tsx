import { CartItem } from "@/types/type";
import { rupiah } from "@/libs/utils";
import { Separator } from "@radix-ui/react-separator";

interface CartCardProps {
  cart: CartItem;
  onClick: (product: CartItem) => void;
}

const CartCardItem = ({ cart, onClick }: CartCardProps) => {
  return (
    <div
      onClick={() => {
        onClick(cart);
      }}
    >
      <div className="flex items-center justify-around">
        <img
          className="w-20 h-20 object-cover rounded-lg"
          src={cart.product.imageUrl}
        />
        <p className="w-1/2 pl-2 text-lg font-light">{cart.product.name}</p>
        <p className="px-2">{cart.quantity}</p>
        <p className="font-light">{rupiah(cart.totalPrice)}</p>
      </div>
      <Separator className="my-4 bg-neutral-400" orientation="horizontal" />
    </div>
  );
};

export default CartCardItem;
