import Head from "../components/Head";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => (
  <>
    <Head title="Projects" />
    <Container>
      <div className="col-12">
        <Navigation />
      </div>
      <div className="col-8">
        <h1>Nathan Searles</h1>

        <h2>Technical leader and frontend developer</h2>

        <p>
          Working through the complete project lifecycle including planning,
          strategy, design, frontend development, backend services, and
          deployments. Taking a component-based approach to building responsive
          experiences with a focus on design and user experience.
        </p>

        <h3>Experience</h3>

        <h2>Cinco</h2>
        <p>Technical Director</p>
        <p>
          Supported digital projects across a design-led studio, from proposals
          and SOWs, to project planning, strategy and hands on development. This
          included complete website rebuilds to working with existing code bases
          and platforms. Clients included The James Brand, Nike, Gogoro, and
          Nextbit.
        </p>

        <h2>Fuzzco</h2>
        <p>Director of Technology</p>
        <p>
          Managed team of developers and established a technology process.
          Oversaw a roster of existing Wordpress websites, supported new
          business, day-to-day engineering and project/account management of new
          and existing clients. Worked with Obey, Hugh & Crye and range of small
          to medium-sized business.
        </p>

        <h2>The Brigade</h2>
        <p>Partner & Director of Technology</p>
        <p>
          Co-founded and helped run all aspects of a newly-formed digital
          agency. Oversaw new business, project, account, and team management,
          to hands-on engineering for clients including Spotify, Intel, and
          Mindjet.
        </p>

        <h2>Pollinate</h2>
        <p>Sr. Frontend Developer</p>
        <p>
          Led frontend engineering for projects with Yakima, Hollywood Theaters,
          and Umpqua Bank, among others.
        </p>

        <h3>Technology</h3>

        <p>
          Taking a component-based approach to building responsive interfaces
          using the latest in <strong>HTML5</strong>, <strong>CSS3</strong> and{" "}
          <strong>JavaScript ES6</strong>.
        </p>

        <p>
          Working with modren frontend frameworks and libraries like{" "}
          <strong>React</strong> and <strong>Next.js</strong>, versioned with{" "}
          <strong>Git</strong>, built with <strong>NPM</strong> and{" "}
          <strong>Webpack</strong>. And powered by a headless{" "}
          <strong>CMS</strong> or a <strong>RESTful</strong> database.
        </p>
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </Container>
  </>
);

export default Home;
