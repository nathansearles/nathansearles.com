import Image from "@components/Image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <a
            href="https://codesandbox.io/u/nathansearles"
            target="_blank"
            rel="noopener"
          >
            CodeSandbox
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nathan-searles-62761b4a"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:nsearles@gmail.com" target="_blank" rel="noopener">
            Email
          </a>
        </li>
      </ul>
    </header>
  );
}