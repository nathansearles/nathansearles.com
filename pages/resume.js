import Head from "../components/Head";
import { getLayout } from "../components/Layout/PageLayout";
import Image from "../components/Image";
import styles from "../styles/Resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <Head title="Resume" />

      <div className={styles.portraitContainer}>
        <div className={styles.portrait}>
          <Image
            src="nathan-searles-2018-square_o8pgtt.jpg"
            alt="A photo of Nathan Searles"
            aspectRatio="square"
            className="rounded"
          />
        </div>
      </div>

      <h1>Nathan Searles</h1>

      <h2>Front-end developer and technical leader</h2>

      <p>
        Working through the complete project lifecycle including planning,
        strategy, prototyping, design, front-end development, backend services,
        and deployments. Taking a component-based approach to building
        responsive experiences with a focus on design, user experience and
        accessability.
      </p>

      <p>
        I'm the Technical Director at{" "}
        <a href="https://studiomega.com/">Studio Mega</a> where I lead all
        things digital.
      </p>

      <h3>Previous Experience</h3>

      <h4>Cinco</h4>
      <h5>Technical Director</h5>
      <p>
        Supported digital projects across a design-led studio, from proposals
        and SOWs, to project planning, strategy and hands on development. This
        included complete website rebuilds to working with existing code bases
        and platforms. Clients included The James Brand, Nike, Gogoro, and
        Nextbit.
      </p>

      <h4>Fuzzco</h4>
      <h5>Director of Technology</h5>
      <p>
        Managed team of developers and established a technology process. Oversaw
        a roster of existing WordPress websites, supported new business,
        day-to-day development and project/account management of new and
        existing clients. Worked with Obey, Hugh &amp; Crye and a range of small
        to medium-sized businesses.
      </p>

      <h4>The Brigade</h4>
      <h5>Partner &amp; Director of Technology</h5>
      <p>
        Co-founded and helped run all aspects of a newly-formed digital agency.
        Oversaw new business, project, account, and team management, to hands-on
        development for clients including Spotify, Intel, and Mindjet.
      </p>

      <h4>Pollinate</h4>
      <h5>Sr. Front-end Developer</h5>
      <p>
        Led front-end development for projects with Yakima, Hollywood Theaters,
        and Umpqua Bank, among others.
      </p>

      <h3>Technology</h3>

      <p>
        Building responsive interfaces using the latest in <strong>HTML</strong>
        , <strong>CSS</strong> and <strong>JavaScript</strong>.
      </p>

      <p>
        Working with modern front-end frameworks and libraries like{" "}
        <strong>React</strong> and <strong>Next.js</strong>, versioned with{" "}
        <strong>Git</strong>, built with <strong>NPM</strong> and{" "}
        <strong>Webpack</strong>, hooked up to a <strong>headless CMS</strong>{" "}
        or custom <strong>API</strong>.
      </p>

      <p>
        Interested in how this site was built? You can review the source on{" "}
        <a href="https://github.com/nathansearles/nathansearles.com">GitHub</a>.
      </p>
    </div>
  );
}

Resume.getLayout = getLayout;
