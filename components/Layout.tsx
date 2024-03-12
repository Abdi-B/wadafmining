import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-full mt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};


export default Layout;
