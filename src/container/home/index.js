import React from "react";
import { Hero } from "../../components/Hero/hero";
import BoyLove from "../../components/customers";
import { Recipe } from "../../components/popularRecipe";

export default function Home() {
  return (
    <div>
      <Hero />
      <BoyLove />
      <Recipe/>
    </div>
  );
}
