import heroImage from "../assets/Hero_image.svg";
import { Card } from "../components/Card";
import youtubeIcon from "../assets/Icon/youtubeIcon.svg";
import tiktokIcon from "../assets/Icon/tiktokIcon.svg";
import facebookIcon from "../assets/Icon/facebookIcon.svg";
import instaIcon from "../assets/Icon/instaIcon.svg";
export function Home() {
  return (
    <>
      <div className="container">
        <section className="main-home">
          <aside className="aside-home">
            <h1 className="title">Crie seus videos online</h1>
            <p className="p-home">
              Transforme suas ideias em filmes memoráveis: onde a criatividade
              encontra a simplicidade.
            </p>
            <button>Começar agora!</button>
          </aside>
          <aside>
            <img src={heroImage} alt="Um homem pulando" />
          </aside>
        </section>
        <section className="cards-home">
          <Card
            icon={youtubeIcon}
            altText="Icone do Youtube"
            numero="01"
            nome="Youtube"
            desc="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
          />
          <Card
            icon={tiktokIcon}
            altText="Icone do Tiktok"
            numero="02"
            nome="Tiktok"
            desc="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
          />
          <Card
            icon={facebookIcon}
            altText="Icone do Facebook"
            numero="03"
            nome="Facebook"
            desc="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
          />
          <Card
            icon={instaIcon}
            altText="Icone do Instagram"
            numero="04"
            nome="Instagram"
            desc="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
          />
        </section>
      </div>
    </>
  );
}
