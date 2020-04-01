import Link from "next/link";
import Image from "../../components/Image";
import styles from "./card.module.scss";

const Card = props => {
  return (
    <Link href={`/projects/${props.slug}`}>
      <a className={styles.Card}>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
        <Image src={props.thumbnail} alt={props.name} aspectRatio={"square"} />
      </a>
    </Link>
  );
};

export default Card;
