import NewArrivalCard from "../home/NewArrivalCard";
import { Button } from "../ui/button";

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
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-row gap-4 overflow-x-auto p-4">
        {cards.map((card, index) => (
          <NewArrivalCard />
          // <Card
          //  key={index}
          //  title={card.title}
          //  description={card.description}
          //  imageUrl={card.imageUrl}
          // />
        ))}
      </div>
      <div>
        <Button variant="outline">View All</Button>
      </div>
    </div>
  );
};

export default NewArrivalProduct;
