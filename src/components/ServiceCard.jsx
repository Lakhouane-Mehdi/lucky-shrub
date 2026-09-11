export default function ServiceCard({ image, alt, title, text }) {
  return (
    <article className="card">
      <img src={image} alt={alt} width="800" height="600" loading="lazy" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
