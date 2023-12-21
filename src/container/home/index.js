import React from "react";
import { Hero } from "../../components/Hero/hero";
import BoyLove from "../../components/customers";
import { Recipe } from "../../components/popularRecipe";
import Service from "../../components/offerPeople";
import ExploreService from "../../components/ExploreService";
import Happy from "../../components/Happy";
import ContactForm from "../../components/Form";

export default function Home() {
  return (
    <div>
      <Hero />
      <BoyLove />
      <Recipe />
      <Service />
      <ExploreService />
      <Happy />
      <ContactForm/>
    </div>
  );
}
