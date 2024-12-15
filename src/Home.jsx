import React from "react";
import Commons from "./Commons";
import web from "./images/1.avif";
import ScrollToTop from "./ScrollToTop";
import img1 from "./images/28.avif";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Commons
        name="Jedno z moich pierwszych zdjęć"
        description="Przyszedłem na świat dokładnie 100 lat później, niż Nicola Tesla, jako drugie dziecko po śmierci mojego brata
      Witolda, który przeżył zaledwie jeden rok."
        description1="Imię Adam miało uchronić mnie przed przedwczesną śmiercią. Jako małe dziecko byłem bardzo chorowity - jak twierdzili rodzice, z powodu wilgoci i grzyba panujących w wynajętym pokoju."
        imgsrc={web}
        btname="Więcej"
        title="Jako niemowlak"
        img={img1}
        p="Za każdym razem, gdy na świat przychodzi dziecko, świat jest tworzony od nowa."
        em="Jostein Gaarder „W zwierciadle niejasno”"
      ></Commons>
    </>
  );
};

export default Home;
