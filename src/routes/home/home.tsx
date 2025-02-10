import { HomeBanner } from "../../components/shared/Banner";
import NewArrivalProduct from "../../components/shared/NewArrivalProduct";

const HomeRoute = () => {
  // const { products } = useLoaderData() as Awaited<
  //   ReturnType<typeof HomeLoader>
  // >;
  return (
    <div className="min-h-screen flex flex-col gap-4 pt-4 pb-8">
      <HomeBanner />

      <div className="flex flex-col gap-4 justify-center items-center p-4">
        <h2 className="font-bold text-4xl text-listHat">New Arrival</h2>
        <p>
          We're updated our product. The new products you can get in our store.
        </p>
        <NewArrivalProduct />
      </div>
    </div>
  );
};

export default HomeRoute;
