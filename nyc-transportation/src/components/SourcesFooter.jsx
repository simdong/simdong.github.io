import { articleSources, dataSources } from "../data/sources.js";

export default function SourcesFooter() {
  return (
    <footer className="sources-footer">
      <h2 className="sources-footer__section-title">Data sources</h2>
      <ul className="sources-footer__list">
        {dataSources.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="sources-footer__section-title sources-footer__section-title--spaced">Relevant Articles</h2>
      <ul className="sources-footer__list">
        {articleSources.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
