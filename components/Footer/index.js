import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        Find me on{" "}
        <a href="https://www.linkedin.com/in/nathan-searles-62761b4a">
          LinkedIn
        </a>{" "}
        or send me an <a href="mailto:nsearles@gmail.com">email</a>.{" "}
        <span className={styles.emoji} aria-label="Peace sign emoji" role="img">
          ✌️
        </span>
      </small>
    </footer>
  );
}
