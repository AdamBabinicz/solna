import React from "react";
import Commons from "./Commons";
import web1 from "./images/2.avif";
import img1 from "./images/26.avif";

const About = () => {
  return (
    <div>
      <Commons
        name="Razem z rodzicami Marianną i Józefem"
        description="W drewnianym domu przy ul. Solnej mieszkaliśmy 5 lat. Tutaj zacząłem rysować konie w bardzo oszczędnej, lapidarnej formie - (zbliżone nieco do naskalnych piktogramów z Alty - jeśli ktoś nie wie, jak wyglądały);
        uczyłem się, ale bez powodzenia, grać na akordeonie. Lepiej wypadła mi jazda na rowerze."
        description1="Największe wrażenie wywarły na mnie elementarz Falskiego i pobliski budynek z czerwonej cegły szkoły podstawowej nr 27, wyjęty jakby żywcem z tego kultowego podręcznika."
        description2="Ostatecznie naukę podjąłem w innej, szacownej szkole nr 11 przy ul. Szkolnej (obecnie J. Grzecznarowskiego)."
        imgsrc={web1}
        btname="Więcej"
        title="Dawniej PSP nr 27 im. J. Słowackiego."
        img={img1}
        p="Budynek Niepublicznej Szkoły Podstawowej im. Juliusza Słowackiego w Radomiu przy ul. Parkowej (dawniej Bakermanów)."
        em="Autorstwa Kranik007, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=6746964"
      ></Commons>
    </div>
  );
};

export default About;
