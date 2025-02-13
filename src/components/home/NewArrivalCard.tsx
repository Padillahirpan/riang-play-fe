import { Product } from "@/types/type";
import { rupiah } from "@/libs/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

interface NewArrivalCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const NewArrivalCard = ({ product, onClick }: NewArrivalCardProps) => {
  return (
    <Card
      className="overflow-hidden h-full bg-white bg-opacity-70 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <CardHeader>
        <img className="h-70 object-cover rounded-lg" src={product.imageUrl} />
      </CardHeader>

      <CardContent className="">
        <div className="">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700 text-base">{rupiah(product.price)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewArrivalCard;
