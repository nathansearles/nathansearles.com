import Link from "next/link";
import Image from "../Image";
import styles from "./project.module.scss";

export default function Project({ slug, title, previewImage, description }) {
  return (
    <Link href={`/project/${slug}`}>
      <a
        className={styles.project}
        aria-label={`Go to the ${title.replace(/^t|The./, "")} project page`}
      >
        <div className={styles.previewImage}>
          <Image
            src={previewImage}
            alt={`Preview image for the ${title.replace(
              /^t|The./,
              ""
            )} project`}
            aspectRatio={"square"}
            ripple
          />
        </div>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </a>
    </Link>
  );
}
