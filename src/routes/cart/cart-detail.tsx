import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { loader } from "./cart-loader";
import { rupiah } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItemList from "@/components/shared/CartItemList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBasket } from "lucide-react";

const CartDetailRoute = () => {
  const cartDetail = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const navigate = useNavigate();

  if (!cartDetail) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-normal p-6 md:p-10">
        <p className="flex items-center bg-white font-semibold">
          Cart not found!
        </p>
      </div>
    );
  }

  return (
    <div className="flex bg-white bg-opacity-40 min-h-svh flex-col items-center bg-whitejustify-normal p-6 md:p-10">
      <div className="w-full h-full grid p-0 md:grid-cols-2 bg-white rounded-lg">
        <div className="relative h-full p-6 md:p-8">
          <p className="text-lg">My Cart</p>
          <Separator className="my-4" orientation="horizontal" />

          <CartItemList
            carts={cartDetail.items}
            onClickItem={(cart) => {
              console.log("xyzCart Clicked ", cart);
              navigate(`/products`);
            }}
            onClickSeeProducts={() => {
              console.log("xyzCart product all ");

              navigate(`/products`);
            }}
          />
        </div>

        <div className="relative h-full hidden md:block p-4">
          <Card>
            <CardHeader>
              <CardTitle>Cart Total</CardTitle>
              <CardDescription>~ ~ ~</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <h2 className="text-l font-light text-neutral-800 py-2">
                  Total
                </h2>
                <h2 className="text-l font-light text-neutral-800 py-2">
                  {rupiah(cartDetail?.totalAmount)}
                </h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-l font-light text-neutral-800 py-2">
                  Shipping
                </h2>
                <h2 className="text-l font-light text-neutral-800 py-2">
                  {rupiah(0)}
                </h2>
              </div>

              <Separator className="my-4" orientation="horizontal" />
            </CardContent>
            <CardFooter>
              <Link to="/">
                <Button className="w-full">
                  <ShoppingBasket /> Proceed to Checkout
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartDetailRoute;
