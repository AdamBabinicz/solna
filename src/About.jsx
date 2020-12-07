import React from "react";
import Commons from "./Commons";
import web1 from "./images/2.jpg";

const About = () => {
  return (
    <div>
      <Commons
        name="Razem z rodzicami Marianną i Józefem"
        description="W drewnianym domu przy ul. Solnej mieszkaliśmy 5 lat. Tutaj zacząłem rysować konie w bardzo oszczędnej, lapidarnej formie - (zbliżone nieco do naskalnych piktogramów z Alty - jeśli ktoś nie wie, jak wyglądały);
        uczyłem się, ale bez powodzenia, grać na akordeonie. Lepiej wypadła mi jazda na rowerze. Największe wrażenie wywarły na mnie elementarz Falskiego i pobliski budynek z czerwonej cegły szkoły podstawowej nr 27, wyjęty jakby żywcem z tego kultowego dziś podręcznika. Ostatecznie naukę podjąłem w innej, jeszcze bardziej szacownej szkole nr 11 przy ul. Szkolnej (obecnie J. Grzecznarowskiego)."
        imgsrc={web1}
        visit="/contact"
        btname="Więcej"
      ></Commons>
    </div>
  );
};

export default About;
