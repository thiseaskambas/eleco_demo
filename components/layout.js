import Footer from './footer';
import Nav from './Nav';

const Layout = ({ children, className }) => {
  return (
    <>
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
