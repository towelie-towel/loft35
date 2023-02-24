import HeaderView from "../components/Header_View";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <header className="container mx-auto">
      <NavBar />
      <HeaderView />
    </header>
  );
};

export default Header;
