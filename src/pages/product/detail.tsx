import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { rupiah } from "@/libs/utils";
import { Product } from "@/types/type";
import { useState } from "react";

interface ProductDetailProps {
  product: Product;
  onClickAddToCart: (product: Product, qtyItem: number) => void;
}

const MIN_PURCHASE = 1;

export const ProductDetailPage = ({
  product,
  onClickAddToCart,
}: ProductDetailProps) => {
  const [qtyToBuy, setQtyToBuy] = useState(product.stock <= 0 ? 0 : 1);
  return (
    <div className="flex bg-neutral-100 bg-opacity-50 min-h-svh flex-col items-center bg-whitejustify-normal p-6 md:p-10">
      <div className="w-full h-full grid p-0 md:grid-cols-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <div className="relative items-center h-full hidden md:block p-4">
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
            <div className="flex items-center px-4 py-2 rounded-lg bg-neutral-200">
              <Button
                className="w-4 pr-4"
                onClick={(_) => {
                  if (qtyToBuy <= MIN_PURCHASE) {
                    return;
                  }
                  setQtyToBuy(qtyToBuy - 1);
                }}
                disabled={product.stock <= 0}
              >
                -
              </Button>
              <p className="mx-2 font-semibold">{qtyToBuy}</p>
              <Button
                className="w-4"
                onClick={(_) => {
                  setQtyToBuy(qtyToBuy + 1);
                }}
                disabled={product.stock <= 0}
              >
                +
              </Button>
            </div>
            <Button
              className="py-4 px-8 mx-6"
              onClick={(_) => {
                if (qtyToBuy < MIN_PURCHASE) {
                  return;
                }
                onClickAddToCart(product, qtyToBuy);
              }}
              disabled={product.stock <= 0}
            >
              Add to cart
            </Button>
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
