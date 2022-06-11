import CustomHead from "@components/CustomHead";
import { getLayout } from "@components/Layout/PageLayout";
import styles from "@styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <CustomHead />
      <h1 className="visually-hidden">Nathan Searles</h1>
      <p>
        Front-end developer and technical director with a focus on design, user
        experience and accessability.
      </p>
      <p>
        I'm the Technical Director at{" "}
        <a href="https://studiomega.com/">Studio Mega</a> where I lead all
        things digital.
      </p>
      <h2 className={styles.label}>Previous Experience</h2>
      <div className={styles.marginBottom}>
        <h3>Cinco</h3>
        <h4>Technical Director</h4>
        <p>
          Supported digital projects across a design-led studio, from proposals
          and SOWs, to project planning, strategy and hands on development. This
          included complete website rebuilds to working with existing code bases
          and platforms. Clients included The James Brand, Nike, Gogoro, and
          Nextbit.
        </p>
      </div>
      <div className={styles.marginBottom}>
        <h3>Fuzzco</h3>
        <h4>Director of Technology</h4>
        <p>
          Managed team of developers and established a technology process.
          Oversaw a roster of existing WordPress websites, supported new
          business, day-to-day development and project/account management of new
          and existing clients. Worked with Obey, Hugh &amp; Crye and a range of
          small to medium-sized businesses.
        </p>
      </div>
      <div>
        <h3>The Brigade</h3>
        <h4>Partner &amp; Director of Technology</h4>
        <p>
          Co-founded and helped run all aspects of a newly-formed digital
          agency. Oversaw new business, project, account, and team management,
          to hands-on development for clients including Spotify, Intel, and
          Mindjet.
        </p>
      </div>
      <h2 className={styles.label}>Technology</h2>
      <p>
        Working on the <strong>Jamstack</strong> to build responsive interfaces
        using the latest in <strong>HTML</strong>, <strong>CSS</strong> and{" "}
        <strong>JavaScript</strong>.
      </p>
      <p>
        Using modern front-end libraries and frameworks like{" "}
        <strong>React</strong> and <strong>Next.js</strong>, versioned with{" "}
        <strong>Git</strong> and connected to a <strong>headless CMS</strong> or
        custom-built <strong>API</strong>.
      </p>
    </>
  );
}

Home.getLayout = getLayout;
