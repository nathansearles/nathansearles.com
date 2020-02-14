import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import ScrollController from "../components/ScrollControlller";

import reset from "../styles/_reset.js";
import base from "../styles/_base.js";
import typography from "../styles/_typography.js";

class Site extends App {
  constructor(props) {
    super(props);
    this.state = { theme: "default" };

    // This binding is necessary to make `this` work in the callback
    this.handleThemeChange = this.handleThemeChange.bind(this);
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
    } else {
      this.setState({ theme: "default" });
    }
  }

  handleThemeChange = () => {
    console.log("theme: ", this.state.theme);
    if (this.state.theme === "dark") {
      this.setState({ theme: "default" });
    } else {
      this.setState({ theme: "dark" });
    }
  };

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ScrollController>
        <div className="theme" data-theme={this.state.theme}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
            <button
              className="themeToggle"
              onClick={this.handleThemeChange}
              title="Hidden stuff!"
            ></button>
          </AnimatePresence>
        </div>
        <style jsx>{`
          .themeToggle {
            position: fixed;
            bottom: -15px;
            left: -15px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            appearance: none;
            border: none;
            background: transparent;
            outline: none;
            appearance: none;
            cursor: pointer;
            background: transparent;
          }
        `}</style>
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
