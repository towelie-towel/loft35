import CardSlider from "../components/Carousel-D";
import data from "../utils/data";

const HeaderView = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CardSlider images={data.products.map((product) => product.image)} />
    </div>
  );
};

export default HeaderView;
