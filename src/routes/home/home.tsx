import { useLoaderData, useNavigate } from "react-router-dom";
import { HomeBanner } from "../../components/shared/Banner";
import NewArrivalProduct from "../../components/shared/NewArrivalProduct";
import { loader } from "./home-loader";

const HomeRoute = () => {
  const products = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white bg-opacity-50 flex flex-col gap-4">
      <HomeBanner />

      <div className="flex flex-col gap-4 justify-center items-center p-4">
        <h2 className="font-bold text-4xl text-listHat">New Arrivals</h2>
        <p>
          We're updated our product. The new products you can get in our store.
        </p>
        <NewArrivalProduct
          products={products}
          onClick={(product) => {
            navigate(`/product/${product.id}`);
          }}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
