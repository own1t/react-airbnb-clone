import React, { useState } from "react";

import Card from "../components/Card";
import Banner from "../components/Banner";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Banner />

        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
        </div>

        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Description for the Card Component"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
