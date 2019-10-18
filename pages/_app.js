import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import ScrollController from "../components/ScrollControlller";

class Site extends App {
  componentDidMount() {
    if ("scrollRestoration" in history) {
      // Handle scroll with ScrollController
      history.scrollRestoration = "manual";
    }
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
  }
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ScrollController>
        <div
          className={`theme ${
            this.colorScheme ? "theme-dark" : "theme--default"
          }`}
        >
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </ScrollController>
    );
  }
}

export default Site;
