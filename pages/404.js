import Link from "next/link";
import CustomHead from "@components/CustomHead";
import { getLayout } from "@components/Layout/PageLayout";

export default function Custom404() {
  return (
    <>
      <CustomHead />
      <p>Bummer dude, this page isn't here.</p>
      <p>
        Get back to the{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>{" "}
        .
      </p>
    </>
  );
}

Custom404.getLayout = getLayout;
