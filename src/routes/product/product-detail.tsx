import { useLoaderData, useNavigate } from "react-router-dom";
import { addProductToCart, loader } from "./product-loader";
import { Product } from "@/types/type";
import { ProductDetailPage } from "@/pages/product/detail";

const ProductDetailRoute = () => {
  const product = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const navigate = useNavigate();

  const onClickAddToCart = async (product: Product, qty: number) => {
    const request = {
      productId: product.id as number,
      quantity: qty as number,
    };

    const cart = await addProductToCart(request);
    if (!cart) {
      navigate("/login");
      return;
    }
    navigate("/cart");
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <ProductDetailPage
      product={product}
      onClickAddToCart={(product, qty) => {
        onClickAddToCart(product, qty);
      }}
    />
  );
};

export default ProductDetailRoute;
