import { getLayout as getPageLayout } from "./index";
import styles from "./layout.module.scss";

export default function PageLayout({ children }) {
  return (
    <>
      <main className={styles.main} id="main">
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}

export const getLayout = (page) =>
  getPageLayout(<PageLayout>{page}</PageLayout>);
