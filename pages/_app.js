import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import ScrollController from "../components/ScrollControlller";

import reset from "../styles/_reset.js";
import base from "../styles/_base.js";
import typography from "../styles/_typography.js";

class Site extends App {
  state = { theme: "default" };

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
        <style jsx global>
          {reset}
        </style>
        <style jsx global>
          {base}
        </style>
        <style jsx global>
          {typography}
        </style>
      </ScrollController>
    );
  }
}

export default Site;
