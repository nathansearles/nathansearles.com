import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Button";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  return (
    <div className={styles.Navigation}>
      <nav>
        {props.subpage ? (
          <h1>
            <Link href="/" scroll={false}>
              <a>
                <svg
                  className={styles.iconArrow}
                  width="8"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="arrowBackground"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "rgba(255, 255, 255, 1)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="100%"
                        style={{
                          stopColor: "rgba(255, 255, 255, 0.65)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#arrowBackground)"
                    fillRule="nonzero"
                    d="M6 0L0 6l6 6 1.406-1.406L2.813 6l4.593-4.594z"
                  />
                </svg>
                Projects
              </a>
            </Link>
          </h1>
        ) : (
          <h1>
            <Link href="/" scroll={false}>
              <a>Nathan Searles</a>
            </Link>
          </h1>
        )}

        <div>
          <Button href="/resume" classes="solid">
            Resume
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
