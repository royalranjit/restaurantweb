import React from "react";
import { Hero } from "./Hero/hero";
import BoyLove from "./customers";
import ExploreService from "./ExploreService";
import Happy from "./Happy";
import { Recipe } from "./popularRecipe";
import Service from "./offerPeople";
import Contact from "./Form";

export default function Home() {
  return (
    <div>
      <Hero />
      <BoyLove />
      <Recipe />
      <Service />
      <ExploreService />
      <Happy />
      <Contact />
    </div>
  );
}
