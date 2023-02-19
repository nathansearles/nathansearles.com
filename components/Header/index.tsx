import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <a
            href="https://codesandbox.io/u/nathansearles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeSandbox
          </a>
        </li>
        <li>
          <a href="mailto:nsearles@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </li>
      </ul>
    </header>
  );
}