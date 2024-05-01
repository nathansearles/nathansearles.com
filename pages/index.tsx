import Head from "next/head";
import { useTimer } from "@/hooks/useTimer";
import { AnimatePresence } from "framer-motion";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const introActive = useTimer(2150);
  return (
    <>
      <Head>
        <title>Nathan Searles &ndash; front-end engineer</title>
        <meta
          name="description"
          content="Front-end Engineer with a focus on design, user experience and accessibility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>{introActive && <Intro />}</AnimatePresence>
      <Header />
      <main className={styles.main}>
        <h1 className="visually-hidden">Nathan Searles</h1>
        <p>
          I specialize in front-end engineering, placing a strong emphasis on
          design principles, user experience, and accessibility. My passion lies
          in creating visually appealing and user-friendly interfaces that are
          accessible to everyone.
        </p>
        <p>
          As the Technical Director at{" "}
          <a href="https://studiomega.com/">Studio Mega</a>, I lead our digital
          initiatives, guiding and overseeing all aspects of our technical
          projects.
        </p>
        <h2 className={styles.label}>Previous Experience</h2>
        <section className={styles.marginBottom}>
          <h3>Cinco</h3>
          <h4>Technical Director</h4>
          <p>
            Orchestrated diverse digital initiatives within a design-focused
            studio, adeptly navigating from initial proposals and SOWs to
            meticulous project planning, strategic implementation, and hands-on
            development. Led comprehensive website overhauls while seamlessly
            collaborating with established code bases and platforms. Notable
            clientele encompassed industry leaders such as The James Brand,
            Nike, Gogoro, and Nextbit.
          </p>
        </section>
        <section className={styles.marginBottom}>
          <h3>Fuzzco</h3>
          <h4>Director of Technology</h4>
          <p>
            Led a dynamic team of developers and spearheaded the implementation
            of streamlined technology processes. Managed a portfolio of
            WordPress websites, providing comprehensive support for both
            established clients and new business ventures. Juggled the demands
            of daily development tasks and project/account management with
            finesse, catering to a diverse clientele ranging from industry
            giants like Obey and Hugh & Crye to a variety of small to
            medium-sized businesses.
          </p>
        </section>
        <section>
          <h3>The Brigade</h3>
          <h4>Partner &amp; Director of Technology</h4>
          <p>
            Played a pivotal role as co-founder in launching and managing a
            cutting-edge digital agency from the ground up. From steering new
            business ventures to orchestrating project and account management,
            as well as nurturing team dynamics, I had a hand in every aspect.
            And yes, I also rolled up my sleeves for hands-on development work,
            contributing to successful projects for esteemed clients such as
            Spotify, Intel, and Mindjet.
          </p>
        </section>
        <h2 className={styles.label}>Technology</h2>
        <section>
          <p>
            I specialize in crafting responsive interfaces using the Jamstack
            architecture, powered by the latest advancements in{" "}
            <strong>HTML</strong>, <strong>CSS</strong>, and
            <strong>JavaScript</strong>. By utilizing contemporary front-end
            libraries like <strong>React</strong>
            and frameworks such as <strong>Next.js</strong>, I ensure robust
            development practices. Each project is meticulously versioned with{" "}
            <strong>Git</strong> and seamlessly connected to either a{" "}
            <strong>headless CMS</strong> or a bespoke <strong>API</strong>,
            delivering unparalleled user experiences.
          </p>
        </section>
      </main>
      <div className={styles.transparencyBlocker}></div>
    </>
  );
}
