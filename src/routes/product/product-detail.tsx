import { useLoaderData, useNavigate } from "react-router-dom";
import { addProductToCart, loader } from "./product-loader";
import { rupiah } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/type";
import { useState } from "react";

const MIN_PURCHASE = 1;

const ProductDetailRoute = () => {
  const product = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const navigate = useNavigate();

  const [qtyToBuy, setQtyToBuy] = useState(1);

  const onClickAddToCart = async (product: Product, qty: number) => {
    const request = {
      productId: product.id as number,
      quantity: qty as number,
    };

    const cart = await addProductToCart(request);
    if (!cart) {
      navigate("/login");
    }
    navigate("/cart");
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="flex min-h-svh flex-col items-center bg-whitejustify-normal p-6 md:p-10">
      <div className="w-full h-full grid p-0 md:grid-cols-2">
        <div className="relative h-full p-6 md:p-8 bg-black">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="relative h-full hidden md:block p-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h2 className="text-l font-light text-neutral-800 py-2">
            {rupiah(product.price)}
          </h2>
          {product.stock <= 0 ? (
            <p className="text-sm text-destructive">
              Out of stock, please check back later
            </p>
          ) : (
            <p className="text-sm text-neutral-500">
              {product.stock} left in stock
            </p>
          )}
          <div className="flex items-center my-4">
            <div className="flex items-center px-4 py-2 rounded-sm bg-neutral-200">
              <Button
                className="w-4 pr-4"
                onClick={(_) => {
                  if (qtyToBuy <= MIN_PURCHASE) {
                    return;
                  }
                  setQtyToBuy(qtyToBuy - 1);
                }}
              >
                -
              </Button>
              <p className="mx-2 font-semibold">{qtyToBuy}</p>
              <Button
                className="w-4"
                onClick={(_) => {
                  setQtyToBuy(qtyToBuy + 1);
                }}
              >
                +
              </Button>
            </div>
            {qtyToBuy > 0 && (
              <Button
                className="py-4 px-8 mx-6"
                onClick={(_) => {
                  if (qtyToBuy < MIN_PURCHASE) {
                    return;
                  }
                  onClickAddToCart(product, qtyToBuy);
                }}
              >
                Add to cart
              </Button>
            )}
          </div>

          <Separator className="my-4" orientation="horizontal" />
          <div className="pt-4">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="w-1/2 text-sm text-neutral-500">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailRoute;
