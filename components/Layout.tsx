import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
