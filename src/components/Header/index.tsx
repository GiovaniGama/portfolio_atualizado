import styles from "./styles.module.scss";
import "@fontsource/press-start-2p";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header id="Header" className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>/ Bem vindo ao meu site!</h1>
          <nav>
            <ul>
              <li>
                <a href="#Profile">
                  <p>Profile </p>
                  <FontAwesomeIcon className={styles.iconNav} icon={faUser} />
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <p>Projects</p>
                  <FontAwesomeIcon className={styles.iconNav} icon={faCode} />
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
