export function CardSobre({ nome, botao = "Cadastrar", children }) {
  return (
    <>
      <div className="borda">
        <h3 className={`card-${nome}`}>{nome}</h3>
        {children}
        <button>{botao}</button>
      </div>
    </>
  );
}
