import Link from "next/link";
import { Container, Row, Column } from "../Grid";
import styles from "./topbar.module.scss";

const TopBar = (props) => {
  return (
    <Container classes={styles.TopBar}>
      <Row>
        <Column xs={12}>
          <p>
            👋{" "}
            <Link href="/resume">
              <a>Available for new opportunities</a>
            </Link>
          </p>
        </Column>
      </Row>
    </Container>
  );
};

export default TopBar;
