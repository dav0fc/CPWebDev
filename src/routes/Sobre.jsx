import { CardSobre } from "../components/CardSobre";
import imagem1 from "../assets/iphone1.svg";
import imagem2 from "../assets/iphone2.svg";
import flecha from "../assets/flechinha.svg";
import tia from "../assets/tiazinha.svg";

export function Sobre() {
  return (
    <>
      <div className="main-sobre">
        <section className="texts">
          <h2 className="title">Bem-vindo à revolução dos vídeos!</h2>
          <p className="p-sobre">
            Somos uma startup com o objetivo de facilitar a produção de conteúdo
            em larga escala com qualidade profissional, capaz de atingir uma
            audiência de milhões de seguidores.
          </p>
          <button className="button-sobre">Baixe o app</button>
        </section>
        <section className="img-sobre">
          <img src={imagem1} alt="Foto de um celular" />
          <img src={imagem2} alt="Foto de um celular" />
        </section>
      </div>
      <h2 className="title-plan">Planos</h2>
      <section className="bottom-sobre">
        <CardSobre nome="Individual">
          <span className="card-span">1 Usuário</span>
          <div className="box-card">
            <span>
              10 Vídeos <strong>R$15</strong>
              <img src={flecha} />
            </span>
          </div>
        </CardSobre>
        <CardSobre nome="Profissional-Times">
          <span className="card-span">1-10 Usuários</span>
          <div className="box-card">
            <span>
              Vídeos Ilimitados <strong>R$45</strong> <img src={flecha} />
            </span>
          </div>
          <span className="card-span">+10 Usuários</span>
          <div className="box-card">
            <span>
              Vídeos ilimitados <strong>R$20</strong>
              <img src={flecha} />
            </span>
          </div>
        </CardSobre>
        <CardSobre nome="Corporativo" botao="Entre em contato">
          <img src={tia} alt="Moça mexendo no celular" />
        </CardSobre>
      </section>
    </>
  );
}
