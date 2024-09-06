export function Card({ numero, nome, desc, icon, altText }) {
  return (
    <section class={`card-${nome} card`}>
      <div className="card-logo">
        <span>{numero}</span>
        <img src={icon} alt={altText} />
      </div>
      <div className="card-texts">
        <h2>{nome}</h2>
        <p>{desc}</p>
      </div>
    </section>
  );
}
