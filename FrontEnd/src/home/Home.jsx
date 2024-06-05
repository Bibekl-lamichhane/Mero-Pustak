import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Suscribtion from "../components/Subscription";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Suscribtion />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
