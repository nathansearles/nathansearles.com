import Link from "next/link";
import styles from "./card.module.scss";

const Card = props => {
  return (
    <Link href={props.href}>
      <a className={styles.Card}>{props.children}</a>
    </Link>
  );
};

export default Card;
