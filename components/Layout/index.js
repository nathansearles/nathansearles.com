import Navigation from "../Navigation";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      {/* a11y - aria-describedby */}
      <div hidden>
        <span id="new-window-0">Opens in a new window</span>
        <span id="new-window-1">Opens an external site</span>
        <span id="new-window-2">Opens an external site in a new window</span>
      </div>
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
