import { useLoaderData, useNavigate } from "react-router-dom";
import { loader } from "./all-product-loader";
import { Product } from "@/types/type";
import { ProductPage } from "@/pages/product/homepage";

const ProductRoute = () => {
  const products: Product[] | null = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  const navigate = useNavigate();

  const onClickDetail = async (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  if (!products) {
    return <p>Product not found!</p>;
  }

  return (
    <ProductPage
      products={products}
      onClickDetail={(product) => {
        onClickDetail(product);
      }}
    />
  );
};

export default ProductRoute;
