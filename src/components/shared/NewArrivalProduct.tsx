// filepath: /Users/irpanpadillah/Documents/Irpan/Project/webdev/month-5/FE/riang-play/src/components/shared/NewArrivalProduct.tsx
import Card from "./NewArrivalCard";

const NewArrivalProduct = () => {
  const cards = [
    {
      title: "Product 1",
      description: "This is the description for product 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Product 2",
      description: "This is the description for product 2.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Product 3",
      description: "This is the description for product 3.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Product 4",
      description: "This is the description for product 4.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Product 5",
      description: "This is the description for product 5.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-row gap-4 overflow-x-auto">
      {cards.map((card, index) => (
        <Card
        //  key={index}
        //  title={card.title}
        //  description={card.description}
        //  imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewArrivalProduct;
