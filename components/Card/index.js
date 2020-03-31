import styles from "./card.module.scss";
const Card = props => {
  return (
    <a href="#" className={styles.Card}>
      {props.children}
    </a>
  );
};

export default Card;
