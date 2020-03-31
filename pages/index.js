import Head from "../components/Head";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => (
  <>
    <Head title="Projects" />
    <Container>
      <Navigation />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci,
        fugiat exercitationem.
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        unde doloribus omnis voluptates, quae porro officia sunt excepturi
        commodi! Fugit alias unde ducimus ex, corrupti voluptas perferendis
        ipsam repudiandae qui.
      </p>

      <div className="grid">
        <Card>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
        <Card>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
        <Card>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
        <Card>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
      </div>
      <Footer />
    </Container>
  </>
);

export default Home;
