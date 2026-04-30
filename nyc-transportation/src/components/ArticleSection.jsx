import { useInView } from "../hooks/useInView.js";

export default function ArticleSection({ children, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`article-section ${visible ? "article-section--visible" : ""} ${className}`.trim()}>
      {children}
    </section>
  );
}
