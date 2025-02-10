import { Product } from "@/types/type";
import banner_1 from "../../assets/images/banner_1.jpg";
import { rupiah } from "@/libs/utils";

interface NewArrivalCardProps {
  product: Product;
}

const NewArrivalCard = ({ product }: NewArrivalCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={banner_1} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{rupiah(product.price)}</p>
      </div>
    </div>
  );
};

export default NewArrivalCard;
