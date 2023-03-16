import HeaderView from "../components/Header_View";
import NavBar from "../components/NavBar";
import ImageUploaderForm from "../components/UploadProduct";

const Header = () => {
  return (
    <header className="container mx-auto">
      <NavBar />
      <HeaderView />
      <ImageUploaderForm />
    </header>
  );
};

export default Header;
