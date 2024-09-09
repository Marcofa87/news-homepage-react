import imageWebMobile from "@/images/image-web-3-mobile.jpg";
import imageWebDesktop from "@/images/image-web-3-desktop.jpg";
import "./section.css";

function Section() {
  return (
    <section className="section">
      <div className="image-web">
        <picture>
          <source media="(min-width: 968px)" srcSet={imageWebDesktop} />
          <img src={imageWebMobile} alt="web3 image" />
        </picture>
      </div>
      <div className="image-web-container">
        <div className="image-web-container-text">
          <h1 className="image-web-container-heading">
            The bright Future of Web 3.0?
          </h1>
        </div>
        <div className="image-web-container-content">
          <p className="image-web-container-content-paragraph">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fullfilling its promise?
          </p>
          <button className="image-web-container-content-paragraph">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section;
