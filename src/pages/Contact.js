import React from "react";
import WomanImg from "../img/contact/woman.png";

const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10">
            bg
          </div>
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact Me</h1>
            <p className="mb-12">
              I would love to hear from you. Whether you have a question about a
              project or just want to say hi, my inbox is always open.
            </p>
            {/* form */}
            <form action="#" className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text{#757879]"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text{#757879]"
                />
              </div>
              <input
                type="text"
                placeholder="Your Message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text{#757879]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send It
              </button>
            </form>
          </div>
          <div className="lg:flex-1">
            <img src={WomanImg} alt="womanImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
