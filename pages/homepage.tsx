import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from 'next/image';

const HomePage = ({children} : {children : React.ReactNode}) => {
  return <>
    <Header />
    <main>
        {children}
    </main>
    </>;
};

export default HomePage;
