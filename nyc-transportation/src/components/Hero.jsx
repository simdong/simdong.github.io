const base = import.meta.env.BASE_URL;

export default function Hero({
  title,
  author,
  dateline,
  imageSrc = `${base}images/hero-nyc.jpg`,
  imageAlt = "New York City skyline at dusk.",
  imageCredit,
}) {
  return (
    <header className="hero" role="banner" aria-label={imageAlt}>
      <div
        className="hero__bg"
        style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : undefined }}
        role="presentation"
      />
      <div className="hero__scrim" role="presentation" />
      <div className="hero__inner">
        <h1 className="hero__title" id="hero-title">
          {title}
        </h1>
        <p className="hero__byline">
          <span className="hero__author">{author}</span>
          {dateline ? <span className="hero__dateline">{dateline}</span> : null}
        </p>
      </div>
      {imageCredit ? (
        <p className="hero__photo-credit">
          <span className="visually-hidden">Photograph credit: </span>
          {imageCredit}
        </p>
      ) : null}
    </header>
  );
}
