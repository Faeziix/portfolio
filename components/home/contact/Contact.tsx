import Button from "@/components/ui/Button";
import { Input, TextArea } from "@/components/ui/Input";
import React from "react";

function Contact() {
  return (
    <section>
      <div className="mb-xl text-center">
        <label className="mb-sm block">Contact</label>
        <h2 id="contact">Get in touch</h2>
      </div>
      <form className="flex mx-auto max-w-xl flex-col items-center">
        <div className="flex gap-2 w-full mb-md">
          <Input required label="Name" className="w-full" name="Name" id="Name" />
          <Input required label="Email"className="w-full"  type="email" name="email" id="email" />
        </div>
        <div className="w-full mb-lg">
          <TextArea
            className=" w-full"
            required
            rows={5}
            label="Message"
            name="message"
            id="message"
          />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}

export default Contact;
