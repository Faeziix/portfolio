import Button from "@/components/ui/Button";
import { Input, TextArea } from "@/components/ui/Input";
import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d510705b-0b17-460b-a671-faccba021ef7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section>
      <div className="mb-xl text-center">
        <label className="mb-sm block">Contact</label>
        <h2 id="contact">Get in touch</h2>
      </div>
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-xl flex-col items-center"
      >
        <div className="mb-md flex w-full gap-2">
          <Input
            required
            label="Name"
            className="w-full"
            name="Name"
            id="Name"
          />
          <Input
            required
            label="Email"
            className="w-full"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-lg w-full">
          <TextArea
            className="w-full"
            required
            rows={5}
            label="Message"
            name="message"
            id="message"
          />
        </div>
        <input type="checkbox" name="botcheck" className="hidden" />

        <Button type="submit">Send</Button>
      </form>
      <div className="mt-md text-center">{result}</div>
    </section>
  );
}

export default Contact;
