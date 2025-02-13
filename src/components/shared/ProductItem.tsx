import { Product } from "@/types/type";
import { rupiah } from "@/libs/utils";

interface NewArrivalCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductItem = ({ product, onClick }: NewArrivalCardProps) => {
  return (
    <div
      onClick={() => {
        onClick(product);
      }}
      className="cursor-pointer"
    >
      <div className="w-full overflow-hidden bg-cover bg-no-repeat">
        <img
          className="h-96 w-full object-cover transition duration-300 ease-in-out hover:scale-110"
          src={product.imageUrl}
        />
      </div>

      <div className="p-2 bg-white bg-opacity-50">
        <h3 className="text-sm">{product.name}</h3>
        <p className="text-neutral-950 font-semibold text-base">
          {rupiah(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
