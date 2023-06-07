import Footer from "./Contact/Footer";
import Navbar from "./NavHeaders/Navbar";

const Layout = ({
  children, hideNavbarAndFooter
}: {
children: React.ReactNode;
hideNavbarAndFooter: boolean;
}) => {

  if (hideNavbarAndFooter) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;