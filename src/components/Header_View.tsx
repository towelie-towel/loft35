import { LoftSign } from "./Icons";

const Cards = [
  {
    imageUrl: "/images/products/bianca_1.jpg",
    title: "bianca_1",
  },
  {
    imageUrl: "/images/products/mart.jpg",
    title: "mart",
  },
  {
    imageUrl: "/images/products/mart_1.jpg",
    title: "mart_1",
  },
  {
    imageUrl: "/images/products/mart-production.jpg",
    title: "mart-production",
  },
  {
    imageUrl: "/images/products/mart-production_1.jpg",
    title: "mart-production_1",
  },
];

const HeaderView = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoftSign width={100} />
    </div>
  );
};

export default HeaderView;
