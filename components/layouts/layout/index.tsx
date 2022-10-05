import Head from "next/head";
import React from "react";
import Navbar from "../../sections/navbar";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Nikko Abucejo</title>
        <meta name="description" content="Nikko Abucejo Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="[&>*>*]:max-w-7xl [&>*>*]:mx-auto px-4 mb-10">
        <Header>
          <section>
            <Navbar />
          </section>
        </Header>
        <Main>{children}</Main>
        <Footer>{/* <section>footer</section> */}</Footer>
      </div>
    </>
  );
};

export default Layout;
