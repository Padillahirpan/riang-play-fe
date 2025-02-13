import { Product } from "@/types/type";
import ProductItem from "./ProductItem";

interface ProductProps {
  products?: Product[];
  onClick: (product: Product) => void;
}

const ProductList = ({ products = [], onClick }: ProductProps) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="grid grid-cols-4 gap-1">
        {products.map((card, index) => (
          <ProductItem
            key={index}
            product={card}
            onClick={() => onClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
