import Link from "next/link";
import Image from "../../components/Image";
import styles from "./card.module.scss";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Card = (props) => {
  return (
    <Link href="/projects/[slug]" as={`/projects/${props.slug}`} scroll={false}>
      <a className={styles.Card}>
        <LazyLoadComponent>
          <Image
            src={props.thumbnail}
            alt={props.name}
            aspectRatio={"square"}
          />
        </LazyLoadComponent>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
