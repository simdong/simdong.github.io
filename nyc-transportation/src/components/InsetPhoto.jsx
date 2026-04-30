const base = import.meta.env.BASE_URL;

export default function InsetPhoto({ src, alt, caption }) {
  const resolved = src.startsWith("http") ? src : `${base}${src.replace(/^\//, "")}`;

  return (
    <figure className="inset-photo">
      <div className="inset-photo__frame">
        <img src={resolved} alt={alt} loading="lazy" decoding="async" className="inset-photo__img" />
      </div>
      {caption ? <figcaption className="inset-photo__caption">{caption}</figcaption> : null}
    </figure>
  );
}
