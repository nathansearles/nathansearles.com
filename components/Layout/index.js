import styles from "./layout.module.scss";

const Layout = (props) => {
  return (
    <>
      {props.isActive && (
        <div className={styles.Layout}>
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

export default Layout;
