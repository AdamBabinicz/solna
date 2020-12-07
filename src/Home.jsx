import React from "react";
import Commons from "./Commons";
import web from "./images/1.png";

const Home = () => {
  return (
    <Commons
      name="Jedno z moich pierwszych zdjęć"
      description="Przyszedłem na świat dokładnie 100 lat później, niż Nicola Tesla, jako drugie dziecko po śmierci mojego brata
      Witolda, który przeżył zaledwie jeden rok.
      Imię Adam miało uchronić mnie przed przedwczesną śmiercią. Jako małe dziecko byłem bardzo chorowity - jak twierdzili rodzice, z powodu wilgoci i grzyba panujących w wynajętym pokoju."
      imgsrc={web}
      visit="/gallery"
      btname="Więcej"
    ></Commons>
  );
};

export default Home;
