import { HomeBanner } from "../../components/shared/Banner";
import FooterBase from "../../components/Footer";
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
          Nakama's is a premium merchandise line from One Piece. Join Nakama's
          and showcase your passion for "One Piece" with our exclusive items!.
        </p>
        <NewArrivalProduct />
        <div>View All</div>
      </div>
      {/* <Separator className='w-[95%] self-center h-1 rounded my-12' /> */}
      <section className="list-products flex flex-col gap-8">
        <h3 className="font-bold text-4xl text-center  text-listHat ">
          Our Best Selling
        </h3>
        {/* <ListProducts products={products} /> */}
      </section>
      <FooterBase />
    </div>
  );
};

export default HomeRoute;
