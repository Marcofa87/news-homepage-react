import { articles } from "./AsideData";
import "./aside.css";

function Aside() {
  return (
    <aside className="aside">
      <h1>New</h1>
      <section className="articles-list">
        {articles.map((article) => (
          <article key={article.id} className="article">
            <header>
              <h2>{article.heading}</h2>
            </header>
            <p>{article.paragraph}</p>
          </article>
        ))}
      </section>
    </aside>
  );
}

export default Aside;
