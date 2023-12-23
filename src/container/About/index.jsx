import React from "react";
import Authentic from "../authenticRecipy";
import Process from "./behindMaking";
import Master from "./MadeWithLove";
import MeetTheTeam from "./MeetTheTeam";
import Marcus from "./Marcus";

export default function About() {
  return (
    <div>
      <Authentic />
      <Process />
      <Master/>
      <Marcus/>
      <MeetTheTeam/>
    </div>
  );
}
