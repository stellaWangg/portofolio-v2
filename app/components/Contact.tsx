import React from "react";
import Title from "./Title";
import Form from "./Form";
import ContactHero from "./ContactHero";
function Contact() {
  return (
    <div className="bg-stone-200 pt-20 pb-32" id="contact">
      <section className="align-element flex lg:gap-x-60">
        <ContactHero />
        <div className="flex flex-col w-[90vw] ">
          <Title title="Contact Me" />
          <Form />
        </div>
      </section>
    </div>
  );
}

export default Contact;
