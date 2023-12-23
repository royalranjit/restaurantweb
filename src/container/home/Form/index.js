import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./Form";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <div
      id={"contact_form"}
      className={` ${styles.contact_form_container} bg-[white] px-[156px]`}
    >
      <p>Get In Touch</p>
      <div className="flex h-[807px] gap-x-[64px]">
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
