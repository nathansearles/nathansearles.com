import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import ScrollController from "../components/ScrollControlller";

class Site extends App {
  constructor() {
    super();
    this.state = { theme: "default" };
  }

  componentDidMount() {
    if ("scrollRestoration" in history) {
      // Handle scroll with ScrollController
      history.scrollRestoration = "manual";
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.setState({ theme: "dark" });
    }
  }
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ScrollController>
        <div className={`theme theme--${this.state.theme}`}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </ScrollController>
    );
  }
}

export default Site;
