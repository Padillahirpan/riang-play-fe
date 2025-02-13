import { Product } from "@/types/type";
import banner_1 from "../../assets/images/banner_1.jpg";
import { rupiah } from "@/libs/utils";
import { Card, CardContent } from "../ui/card";

interface NewArrivalCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const NewArrivalCard = ({ product, onClick }: NewArrivalCardProps) => {
  return (
    <Card className="overflow-hidden bg-white" onClick={() => onClick(product)}>
      <img className="w-full object-cover rounded-t-lg" src={banner_1} />

      <CardContent className="p-4">
        <div className="">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700 text-base">{rupiah(product.price)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewArrivalCard;
