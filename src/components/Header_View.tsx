import CardSlider from "./Card_Slider";
import data from "../utils/data";
import Slider from "./Card_Slider_2";

const HeaderView = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5 w-[90vw] rounded-lg bg-[var(--secondary-bg-color)] py-10 shadow-lg transition-all">
        <CardSlider images={data.slider} />
        <div className="h-5"></div>
        <Slider
          images={data.slider.map((item) => {
            return { alt: item.src, src: item.src };
          })}
        />
      </div>
    </div>
  );
};

export default HeaderView;
