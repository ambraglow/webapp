import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = ({children} : {children : React.ReactNode}) => {
  return <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>;
};

export default HomePage;
