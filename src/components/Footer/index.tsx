import styles from "./styles.module.scss";

export function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.Container}>
          <h2 className={styles.nomeContainer}>Giovani Gama</h2>
          <nav className={styles.navContainer}>
            <a href="https://www.linkedin.com/in/giovani-gama/" target="_blank">
              <img src="/linkedin.svg" alt="Link do linkedin" />
            </a>
            <a href="https://github.com/GiovaniGama" target="_blank">
              <img src="/github.svg" alt="Link do gitHub" />
            </a>
            <a href="https://www.instagram.com/giovani_gama2/" target="_blank">
              <img src="/insta.svg" alt="Link do insta" />
            </a>
            <a href="mailto: giovanigama.08@hotmail.com" target="_blank">
              <img src="/email.svg" alt="Link do email" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
