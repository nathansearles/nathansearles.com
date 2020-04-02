import Link from "next/link";
import styles from "./button.module.scss";

const Button = props => {
  return (
    <Link href={props.href}>
      <a className={[styles.Button, styles[props.classes]].join(" ")}>
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
