import Head from "@components/Head";
import { getLayout } from "@components/Layout/PageLayout";
import Image from "@components/Image";
import styles from "@styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head />
      <div className={styles.home}>
        <div className={styles.portraitContainer}>
          <div className={styles.portrait}>
            <Image
              src="nathan-searles.jpg"
              alt="A photo of Nathan Searles"
              aspectRatio="square"
              className="rounded"
              width="115"
            />
          </div>
        </div>

        <h1>Nathan Searles</h1>

        <p>
          Front-end developer and technical director with a focus on design,
          user experience and accessability.
        </p>

        <p>
          I'm a Technical Director at{" "}
          <a href="https://studiomega.com/">Studio Mega</a> where I lead all
          things digital.
        </p>

        <p className={styles.label}>Previous Experience</p>

        <h2>Cinco</h2>
        <h3>Technical Director</h3>
        <p>
          Supported digital projects across a design-led studio, from proposals
          and SOWs, to project planning, strategy and hands on development. This
          included complete website rebuilds to working with existing code bases
          and platforms. Clients included The James Brand, Nike, Gogoro, and
          Nextbit.
        </p>

        <h2>Fuzzco</h2>
        <h3>Director of Technology</h3>
        <p>
          Managed team of developers and established a technology process.
          Oversaw a roster of existing WordPress websites, supported new
          business, day-to-day development and project/account management of new
          and existing clients. Worked with Obey, Hugh &amp; Crye and a range of
          small to medium-sized businesses.
        </p>

        <h2>The Brigade</h2>
        <h3>Partner &amp; Director of Technology</h3>
        <p>
          Co-founded and helped run all aspects of a newly-formed digital
          agency. Oversaw new business, project, account, and team management,
          to hands-on development for clients including Spotify, Intel, and
          Mindjet.
        </p>

        <h2>Pollinate</h2>
        <h3>Sr. Front-end Developer</h3>
        <p>
          Led front-end development for projects with Yakima, Hollywood
          Theaters, and Umpqua Bank, among others.
        </p>

        <p className={styles.label}>Technology</p>

        <p>
          Working on the <strong>Jamstack</strong> to build responsive
          interfaces using the latest in <strong>HTML</strong>,{" "}
          <strong>CSS</strong> and <strong>JavaScript</strong>.
        </p>
        <p>
          Using modern front-end libraries and frameworks like{" "}
          <strong>React</strong> and <strong>Next.js</strong>, versioned with{" "}
          <strong>Git</strong> and connected to a <strong>headless CMS</strong>{" "}
          or custom-built <strong>API</strong>.
        </p>
      </div>
    </>
  );
}

Home.getLayout = getLayout;
