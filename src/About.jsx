import React from "react";
import Commons from "./Commons";
import web1 from "./images/2.jpg";

const About = () => {
  return (
    <div>
      <Commons
        name="Razem z rodzicami Marianną i Józefem"
        description="W drewnianym domu na ul. Solnej mieszkaliśmy 5 lat. Tutaj uczyłem się, ale bez powodzenia, grać na akordeonie. Lepiej wypadła mi jazda na rowerze. Największe wrażenie wywarły na mnie elementarz Falskiego i budynek z czerwonej cegły szkoły podstawowej nr 27, wyjęty jakby żywcem z tego podręcznika. Ostatecznie naukę podjąłem w innej, jeszcze bardziej szacownej szkole nr 11 na ul. Szkolnej (obecnie J. Grzecznarowskiego)."
        imgsrc={web1}
        visit="/contact"
        btname="Więcej"
      ></Commons>
    </div>
  );
};

export default About;
