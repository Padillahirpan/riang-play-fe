import { Product } from "@/types/type";
import NewArrivalCard from "../home/NewArrivalCard";
import { Button } from "../ui/button";

interface ProductProps {
  products?: Product[];
  onClick: (product: Product) => void;
}

const NewArrivalProduct = ({ products = [], onClick }: ProductProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((card, index) => (
          <NewArrivalCard
            key={index}
            product={card}
            onClick={() => onClick(card)}
          />
        ))}
      </div>
      <div>
        <Button variant="outline">View All</Button>
      </div>
    </div>
  );
};

export default NewArrivalProduct;
