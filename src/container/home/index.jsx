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
      <div className="mt-[64px]">
        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113073.1731470125!2d85.30764972567661!3d27.66980358175049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1703436810380!5m2!1sen!2snp"
          width="100%"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
