import Link from "next/link";
import Head from "../components/Head";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Error = ({ projects }) => {
  return (
    <>
      <Head title={"Error"} />
      <Navigation />
      <Main>
        <div className="col-8 align-center">
          <div className="emoji emoji--larger">🤦‍♂️</div>
          <h1 className="larger">This page isn't here.</h1>
          <p className="larger">
            Let's head back to the{" "}
            <Link href="/resume">
              <a>main page</a>
            </Link>
            .
          </p>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Error;
