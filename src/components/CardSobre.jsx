export function CardSobre({nome,botao="Cadastrar", children}) {
  return (
    <>
      <h3 className={`card-${nome}`}>{nome}</h3>
      {children}
      <button>{botao}</button>
    </>
  );
}
