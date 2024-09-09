import Logo from "./logo/Logo";
import NavBar from "./navbar/NavBar";
import "./header.css";

function Header() {
  return (
    <>
      <nav className="header">
        <Logo />
        <NavBar />
      </nav>
    </>
  );
}

export default Header;
