import React from "react";
import Title from "./Title";
import Form from "./Form";
import ContactHero from "./ContactHero";
function Contact() {
  return (
    <div className="bg-stone-200">
      <section
        id="contact"
        className="align-element pt-20 flex pb-32  lg:gap-60"
      >
        <ContactHero />
        <div className="max-w-[1400px] flex flex-col w-[95vw] ">
          <Title title="Contact Me" />
          <Form />
        </div>
      </section>
    </div>
  );
}

export default Contact;
