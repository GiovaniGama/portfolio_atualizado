import styles from "../styles/index.module.scss";

import "@fontsource/press-start-2p";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <section>
        <div className={styles.Container}>
          <div className={styles.imagesContainer}>
            <div className={styles.image1}>
              <img src="/image1.svg" alt="Primeira imagem de Fundo" />
            </div>
          </div>
          <div className={styles.iconTextContainer}>
            <div className={styles.textoContainer}>
              <p className={styles.nome}>Giovani Gama</p>
              <p className={styles.tema}>Dev Front-End</p>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon1} icon={faLaptopCode} />
                <FontAwesomeIcon className={styles.icon1} icon={faCode} />
              </div>
              <div className={styles.navContainer}>
                <nav>
                  <a
                    href="https://www.linkedin.com/in/giovani-gama/"
                    target="_blank"
                  >
                    <img src="/linkedin.svg" alt="Link do linkedin" />
                  </a>
                  <a href="https://github.com/GiovaniGama" target="_blank">
                    <img src="/github.svg" alt="Link do gitHub" />
                  </a>
                  <a
                    href="https://www.instagram.com/giovani_gama2/"
                    target="_blank"
                  >
                    <img src="/insta.svg" alt="Link do insta" />
                  </a>
                  <a href="mailto: giovanigama.08@hotmail.com" target="_blank">
                    <img src="/email.svg" alt="Link do email" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section>
          <div className={styles.conhecimentosContainer}>
            <img
              src="/Python.svg"
              className={styles.imgConhecimentos}
              alt="Python"
            />
            <img
              src="/JS.svg"
              className={styles.imgConhecimentos}
              alt="Java Script"
            />
            <img
              src="/react.svg"
              className={styles.imgConhecimentos}
              alt="React"
            />
            <img src="/Php.svg" className={styles.imgConhecimentos} alt="Php" />
            <img
              src="/html.svg"
              className={styles.imgConhecimentos}
              alt="Html"
            />
            <img src="/css.svg" className={styles.imgConhecimentos} alt="Css" />
          </div>
        </section>
        <section>
          <div className={styles.perfil}>
            <div className={styles.tituloPefil}>
              <h2 id="Profile">Profile</h2>
            </div>
            <div className={styles.perfilContainer}>
              <div className={styles.fotoPefil}>
                <img src="/perfil.svg" alt="Foto do pefil" />
                <p className={styles.nomePefil}>Giovani Gama</p>
                <a href="/curriculo.pdf" download="Currículo Giovani Gama">
                  <img src="/baixecurriculo.svg" alt="link do curriculo" />
                </a>
                <p className={styles.baixeCurriculo}>Baixe curricúlo</p>
              </div>
              <div>
                <h2>Sobre Mim</h2>
                <div className={styles.card1}>
                  <p>
                    Sou um jovem, criativo e esforçado que sempre está em busca
                    em adquirir mais conhecimentos naquilo que almeja para o meu
                    futuro, minhas principais habilidades são o esforço e
                    persistência em meus objetivos, então, eu sempre estarei
                    pronto para aprender e aprimorar meus conhecimentos e
                    habilidades profissionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.projetos}>
            <div className={styles.tituloProjetos}>
              <h2 id="Projects">Projects</h2>
            </div>
            <div className={styles.card}>
              <p>Clique na imagem para ver o projeto</p>
              <div className={styles.cardProjetos}>
                <a
                  href="https://felpe-sena-portfolio.vercel.app/"
                  target="_blank"
                >
                  <img src="/projeto1.svg" alt="Projeto 1" />
                </a>
              </div>
              <h2>Portfólio</h2>
              <p>Projeto finalizado</p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.buttonContainer}>
            <a href="#Header">
              <FontAwesomeIcon className={styles.icon3} icon={faArrowUp} />
              <p>Voltar</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
