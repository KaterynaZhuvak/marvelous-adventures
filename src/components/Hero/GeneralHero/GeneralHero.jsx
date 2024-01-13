import React from "react";
import { register } from "swiper/element/bundle";

import Slide from "./Slide";
import purpleHero1 from "../../../img/purple-hero1.png";
import purpleHero2 from "../../../img/purple-hero2.png";
import redHero1 from "../../../img/red-hero1.png";
import redHero2 from "../../../img/red-hero2.png";
import greenHero1 from "../../../img/green-hero1.png";
import greenHero2 from "../../../img/green-hero2.png";

const GeneralHero = () => {
  register();
  return (
    <div className="container">
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-clickable="true"
        loop="true"
      >
        <swiper-slide>
          <Slide
            color={"#34387F"}
            characterDescription={
              "T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther."
            }
            img1={purpleHero1}
            img2={purpleHero2}
          />
        </swiper-slide>
        <swiper-slide>
          {" "}
          <Slide
            color={"#600404"}
            characterDescription={
              "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming "
            }
            img1={redHero1}
            img2={redHero2}
          />
        </swiper-slide>
        <swiper-slide>
          <Slide
            color={"#5B7F3C"}
            characterDescription={
              "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk."
            }
            img1={greenHero1}
            img2={greenHero2}
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default GeneralHero;
