import styles from "./page.module.scss";

const Page = props => {
  return <div className={styles.Page}>{props.children}</div>;
};

export default Page;
