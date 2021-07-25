import Link from "next/link";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import styles from "../styles/Error.module.scss";

export default function custom404() {
  return (
    <>
      <Head title={"Error"} />
      <Navigation />
      <Main className={styles.error}>
        <div>
          <div
            className={[styles.emoji, styles.larger].join(" ")}
            aria-hidden="true"
            aria-label="Facepalm"
            role="img"
          >
            🤦‍♂️
          </div>
          <h1 className="larger">This page isn't here.</h1>
          <p className="larger">
            Let's head back to the{" "}
            <Link href="/">
              <a>projects page</a>
            </Link>
            .
          </p>
        </div>
      </Main>
      <Footer />
    </>
  );
}
