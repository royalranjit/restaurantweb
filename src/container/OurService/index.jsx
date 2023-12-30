import React from "react";
import Service from "./Service";
import Section2 from "./dine";
import PrivateParty from "./private";
import Section3 from "./Queries";

export default function OurService() {
  return (
    <div>
      <Service />
      <Section2/>
      <PrivateParty/>
      <Section3/>
    </div>
  );
}
