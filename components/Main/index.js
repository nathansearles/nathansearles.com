import styles from "./main.module.scss";

const Main = ({ children, className }) => {
  return <main className={[styles.main, className].join(" ")}>{children}</main>;
};

export default Main;
