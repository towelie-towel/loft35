import CardSlider from "./Card_Slider";
import data from "../utils/data";

const HeaderView = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CardSlider images={data.slider} />
      <div className="my-5"></div>
    </div>
  );
};

export default HeaderView;
