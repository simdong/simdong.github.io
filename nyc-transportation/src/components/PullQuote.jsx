export default function PullQuote({ children }) {
  return (
    <blockquote className="pull-quote">
      <p className="pull-quote__text">{children}</p>
    </blockquote>
  );
}
