export function Card({numero, nome, desc,icon,altText}) {
    return (
        <section class={`card-${nome}`}>
            <img src={icon} alt={altText} />
            <span>{numero}</span>
            <h2>{nome}</h2>
            <p>{desc}</p>
        </section>
    )
}