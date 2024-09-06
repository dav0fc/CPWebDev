export function Contato() {
    return (
        <section className="contato">
            <aside className="left">
                <h2 className="title">Dúvidas e suporte, entre em contato:</h2>
                <div className="icons">
                    <img src="/1.svg" alt="" />
                    <img src="/2.svg" alt="" />
                    <img src="/3.svg" alt="" />
                </div>
            </aside>
            <div className="line"></div>
            <aside className="right">
                <form className="form" action="">
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input id="nome" />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />
                    <label htmlFor="msg">Mensagem:</label>
                    <textarea name="msg" id="msg"></textarea>
                    <button>Enviar</button>
                </form>
            </aside>
        </section>
    );
}
