import styles from "./grid.module.scss";

const Grid = (props) => {
  return (
    <>
      {props.isActive && (
        <div className={styles.Grid}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Grid;
