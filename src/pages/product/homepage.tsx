import ProductList from "@/components/shared/ProductList";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/type";

interface ProductProps {
  products: Product[];
  onClickDetail: (product: Product) => void;
}

export const ProductPage = ({ products, onClickDetail }: ProductProps) => {
  return (
    <div className="flex bg-neutral-100 bg-opacity-50 min-h-svh flex-col justify-normal p-6 md:p-10">
      <div className="flex justify-between items-center py-2">
        <div className="text-2xl font-light text-listHat flex items-center h-full">
          Our best products
        </div>
      </div>

      <Separator />
      <ProductList products={products} onClick={onClickDetail} />
    </div>
  );
};
