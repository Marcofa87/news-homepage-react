import { blogArticles } from "./FooterData";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-content">
        {blogArticles.map((article) => (
          <article key={article.id} className="footer-article">
            {article.image && (
              <figure className="footer-image">
                <img
                  src={article.image}
                  alt={
                    article.alt || "Descriptive alt text for the article image"
                  }
                />
              </figure>
            )}
            <div className="article-content">
              <header>
                <h2>{article.number}</h2>
                <h3>{article.heading}</h3>
              </header>
              <p>{article.paragraph}</p>
            </div>
          </article>
        ))}
      </section>
    </footer>
  );
}

export default Footer;
