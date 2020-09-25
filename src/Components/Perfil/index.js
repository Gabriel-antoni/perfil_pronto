import React, { Component } from "react";
import ReactDOm from "react-dom";
import "./perfil.css";
import Imagem from "../../Assents/icon/html5.png";
import Imagem2 from "../../Assents/icon/css-3.png";
import Imagem3 from "../../Assents/icon/script-java.png";
import Imagem4 from "../../Assents/icon/react2.png";
import Imagem5 from "../../Assents/icon/imagem2.png";
import Imagem6 from "../../Assents/icon/fundo.jpg";

export default class Perfil extends Component {
  render() {
    return (
      <div className="conteiner">
        <div className="box">
          <div className="texto">
            <h2>Olá, Sou Iara Maria.</h2>
            <p>
              {" "}
              Desenvolvedora front-end Jr. sejam todox bem vindxs ao meu blog.
            </p>

            <a target="_black" href="https://github.com/iarawatson2">
              <button>Portifólio</button>
            </a>
          </div>
          <div className="imagem">
            <img
              id="foto"
              src="https://www.endoclinjaciara.com.br/imgs_equipe/201405am104135.jpg"
            />
          </div>
        </div>
        <main className="cursos">
          <div className="caixa1-2">
            <div className="caixa1">
              <div className="texto1">
                <h3>Experiencias</h3>
              </div>
            </div>
            <div className="caixa2">
              <div className="texto2">
                <h3>Acessar Curriculo</h3>
              </div>
              <button className="btn2">entrar</button>
            </div>
          </div>
          <section className="caixa3-4-5-6">
            <div className="caixa3">
              <div className="icon1">
                <img className="iconi" src={Imagem} />
                <h3>HTML</h3>
              </div>
            </div>
            <div className="caixa4">
              <div className="icon1">
                <img className="iconi" src={Imagem2} />
                <h3>CSS</h3>
              </div>
            </div>
            <div className="caixa5">
              <div className="icon1">
                <img className="iconi" src={Imagem3} />
                <h3>JAVA_SCRIPT</h3>
              </div>
            </div>
            <div className="caixa6">
              <div className="icon1">
                <img className="iconi" src={Imagem4} />
                <h3>REACT</h3>
              </div>
            </div>
          </section>
        </main>

        <section id="sobreMim">
          <div className="conteudo">
            <div className="fundo">
              <div className="foto">
                <img id="fot" src={Imagem5} />
              </div>
            </div>
          </div>
          <div className="linha"></div>

          <div className="textoSm">
            <p className="paragrafo">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages , and more recently with desktop
            </p>
          </div>
        </section>
      </div>
    );
  }
}
