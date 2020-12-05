import React from "react";
import Commons from "./Commons";
import web from "./images/1.png";

const Home = () => {
  return (
    <Commons
      name="Jedno z moich pierwszych zdjęć"
      description="Przyszedłem na świat dokładnie 100 lat później, niż Nicola Tesla, jako drugie dziecko po śmierci mojego brata
      Witolda, który przeżył zaledwie jeden rok. 
      Imię Adam miało uchronić mnie przed przedwczesną śmiercią."
      imgsrc={web}
      visit="/courses"
      btname="Więcej"
    ></Commons>
  );
};

export default Home;
