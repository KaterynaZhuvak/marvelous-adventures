import React from "react";
import { register } from "swiper/element/bundle";

import Slide from "./Slide";
import purpleHero1 from "../../../img/purple-hero1.png";
import purpleHero1_2x from "../../../img/purple-hero1@2x.png";
import purpleHero2 from "../../../img/purple-hero2.png";
import purpleHero2_2x from "../../../img/purple-hero2@2x.png";
import redHero1 from "../../../img/red-hero1.png";
import redHero1_2x from "../../../img/red-hero1@2x.png";
import redHero2 from "../../../img/red-hero2.png";
import redHero2_2x from "../../../img/red-hero2@2x.png";
import greenHero1 from "../../../img/green-hero1.png";
import greenHero1_2x from "../../../img/green-hero1@2x.png";
import greenHero2 from "../../../img/green-hero2.png";
import greenHero2_2x from "../../../img/green-hero2@2x.png";

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
            img1_2x={purpleHero1_2x}
            img2={purpleHero2}
            img2_2x={purpleHero2_2x}
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
            img1_2x={redHero1_2x}
            img2={redHero2}
            img2_2x={redHero2_2x}
          />
        </swiper-slide>
        <swiper-slide>
          <Slide
            color={"#5B7F3C"}
            characterDescription={
              "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk."
            }
            img1={greenHero1}
            img1_2x={greenHero1_2x}
            img2={greenHero2}
            img2_2x={greenHero2_2x}
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default GeneralHero;
