import banner_1 from "../../assets/images/banner_1.jpg";

const BestSellerCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={banner_1} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Test 1234</div>
        <p className="text-gray-700 text-base">Harga Murah</p>
      </div>
    </div>
  );
};

export default BestSellerCard;
