import styles from "./main.module.scss";

const Main = (props) => {
  return (
    <main className={[styles.Main, props.classes].join(" ")}>
      {props.children}
    </main>
  );
};

export default Main;
