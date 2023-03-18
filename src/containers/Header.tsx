import { useState } from "react";
import HeaderView from "../components/Header_View";
import NavBar from "../components/NavBar";
import ImageUploaderForm from "../components/UploadProduct";

const Header = () => {
  const [uploadProductActive, setUploadProductActive] = useState(false);
  return (
    <header className="container mx-auto">
      <NavBar
        onUploadProductClick={() => {
          setUploadProductActive(true);
        }}
      />
      <HeaderView />
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
