const base = import.meta.env.BASE_URL;

export default function ChartFigure({ src, alt }) {
  const resolved = src.startsWith("http") ? src : `${base}${src.replace(/^\//, "")}`;

  return (
    <figure className="chart-figure">
      <div className="chart-figure__frame">
        <img src={resolved} alt={alt} loading="lazy" decoding="async" className="chart-figure__img" />
      </div>
    </figure>
  );
}
