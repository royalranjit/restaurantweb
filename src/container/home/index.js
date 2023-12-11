import React from "react";
import { Hero } from "../../components/Hero/hero";
import BoyLove from "../../components/customers";
import { Recipe } from "../../components/popularRecipe";
import Service from "../../components/offerPeople";

export default function Home() {
  return (
    <div>
      <Hero />
      <BoyLove />
      <Recipe/>
      <Service /> 
    </div>
  );
}
