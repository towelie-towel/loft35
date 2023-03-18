import { useState } from "react";
import NavBar from "~/components/NavBar";
import ImageUploaderForm from "~/components/UploadProduct";
import CardsSlider from "~/components/CardsSlider";
import data from "~/utils/data";

const Header = () => {
  const [uploadProductActive, setUploadProductActive] = useState(false);
  return (
    <header className="container mx-auto">
      <NavBar
        onUploadProductClick={() => {
          setUploadProductActive(true);
        }}
      />
      <div className="container m-auto flex flex-col items-center justify-center">
        <div className="w-[95%] rounded-t-lg bg-[var(--secondary-bg-color)] pt-8 shadow-lg transition-all">
          <CardsSlider images={data.slider} />
          <div className="h-5"></div>
        </div>
      </div>
      <ImageUploaderForm
        onCloseClick={() => {
          setUploadProductActive(false);
        }}
        active={uploadProductActive}
      />
    </header>
  );
};

export default Header;
