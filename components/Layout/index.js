import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@components/Header";
import Splash from "@components/Splash";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  const [splashActive, setSplashActive] = useState(true);
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplashActive(false);
    }, 2200);
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);
  return (
    <>
      <Header />
      {children}
      <div className={styles.transparencyBlocker}></div>
      <AnimatePresence>{splashActive && <Splash />}</AnimatePresence>
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
