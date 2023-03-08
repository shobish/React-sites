import React from "react";
import "./Home.css";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import List from "../components/List/List";
import Properties from "../components/Property/Properties";
import MailList from "../components/MailList/MailList";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />

      <div className="homeContainer">
        <h1 className="homeFeatureTitle">We have </h1>
        <Featured />
        <h1 className="homeFeatureTitle">Brows by Properties</h1>
        <List />
        <h1 className="homeFeatureTitle">Choose Your Choice</h1>
        <Properties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
