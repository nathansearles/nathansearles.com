import Link from "next/link";
import Head from "@components/Head";
import { getLayout } from "@components/Layout/PageLayout";

export default function Custom404() {
  return (
    <>
      <div
        className="emoji"
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
          <a>homepage</a>
        </Link>
        .
      </p>
    </>
  );
}

Custom404.getLayout = getLayout;
