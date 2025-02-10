import { Product } from "@/types/type";
import NewArrivalCard from "../home/NewArrivalCard";
import { Button } from "../ui/button";

interface ProductProps {
  products?: Product[];
}

const NewArrivalProduct = ({ products = [] }: ProductProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-row gap-4 overflow-x-auto p-4">
        {products.map((card, index) => (
          <NewArrivalCard key={index} product={card} />
        ))}
      </div>
      <div>
        <Button variant="outline">View All</Button>
      </div>
    </div>
  );
};

export default NewArrivalProduct;
