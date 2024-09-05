export function CardSobre({ nome, botao = "Cadastrar", children }) {
  return (
    <>
      <div className="borda">
        <div className={`card-${nome} nome` }>
          <h3>{nome}</h3>
        </div>
        {children}
        <button className={`card-${nome} card-btn`}>{botao}</button>
      </div>
    </>
  );
}
