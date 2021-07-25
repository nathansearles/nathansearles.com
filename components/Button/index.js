import Link from "next/link";
import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <Link href={props.href}>
      <a className={[styles.Button, styles[props.classes]].join(" ")}>
        <span>{props.children}</span>
      </a>
    </Link>
  );
};

export default Button;
