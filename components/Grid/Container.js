import styles from "./grid.module.scss";
const Container = (props) => {
  return (
    <section className={[styles.Grid, props.classes].join(" ")}>
      {props.children}
    </section>
  );
};

export default Container;
