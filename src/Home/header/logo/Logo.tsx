import logo from "@/images/logo.svg";
import "./logo.css";
function Logo() {
  return (
    <>
      <div className="company-logo">
        <img src={logo} alt="company-logo" />
      </div>
    </>
  );
}

export default Logo;
