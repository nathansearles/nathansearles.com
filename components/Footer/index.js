import styles from "./footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={styles.Footer}>
      <small>
        Find me on{" "}
        <a href="https://www.linkedin.com/in/nathan-searles-62761b4a">
          LinkedIn
        </a>{" "}
        or send me an <a href="mailto:nsearles@gmail.com">email</a>.{" "}
        <span
          className="emoji"
          aria-hidden="true"
          aria-label="Peace"
          role="img"
        >
          ✌️
        </span>
      </small>
    </footer>
  );
};

export default Footer;
