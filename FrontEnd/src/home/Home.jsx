import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Suscribtion from "../components/Subscription";
import OurStory from "../components/OurStory";
import BestDeal from "../components/BestDeal";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Suscribtion />
      <Freebook />
      <OurStory />
      <BestDeal />
      <Footer />
    </div>
  );
}

export default Home;
