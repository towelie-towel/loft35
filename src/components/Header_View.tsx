import CardSlider from "./Card_Slider";
import data from "../utils/data";

const HeaderView = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center">
      <div className="w-[95%] rounded-t-lg bg-[var(--secondary-bg-color)] pt-8 shadow-lg transition-all">
        <CardSlider images={data.slider} />
        <div className="h-5"></div>
      </div>
    </div>
  );
};

export default HeaderView;
