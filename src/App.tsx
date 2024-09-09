import "./App.css";

import Header from "./Home/header/Header";
import Section from "./Home/section/Section";
import Aside from "./Home/aside/Aside";
import Footer from "./Home/footer/Footer";

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Section />
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default App;
