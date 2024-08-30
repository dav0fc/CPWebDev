import { CardSobre } from "../components/CardSobre";
import imagem1 from "../assets/iphone1.svg";
import imagem2 from "../assets/iphone2.svg";
import flecha from "../assets/flechinha.svg";
import tia from "../assets/tiazinha.svg";

export function Sobre() {
  return (
    <>
      <div className="Main-Sobre">
        <section>
          <h2>Bem-vindo à revolução dos vídeos!</h2>
          <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
          <button>Baixe o app</button>
        </section>
        <section>
          <img src={imagem1} alt="Foto de um celular" />
          <img src={imagem2} alt="Foto de um celular" />
        </section>
      </div>
      <section>
        <h2>Planos</h2>
        <CardSobre nome="Individual">
          <span>1 Usuário</span>
          <span>
            10 Vídeos <strong>R$15</strong>
            <img src={flecha}/>
          </span>
        </CardSobre>
        <CardSobre nome="Profissional - Times">
            <span>1-10 Usuários</span>
            <span>Vídeos Ilimitados <strong>R$45</strong> <img src={flecha}/></span>
            <span>+10 Usuários</span>
            <span>Vídeos ilimitados <strong>R$20</strong><img src={flecha}/></span>
        </CardSobre>
        <CardSobre nome="Corporativo" botao="Entre em contato">
            <img src={tia} alt="Moça mexendo no celular"/>
        </CardSobre>
      </section>
    </>
  );
}
