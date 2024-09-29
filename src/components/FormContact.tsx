/** @format */

import React, { useState } from "react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";

const FormContact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();

    const mailtoLink = `mailto:lustiyana1801@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n\n${body}`)}`;

    window.location.href = mailtoLink;

    setName("");
    setSubject("");
    setBody("");
  };

  return (
    <section className="min-h-screen bg-white p-16 flex flex-col justify-center">
      <form className="flex flex-col gap-4" onSubmit={handleSend}>
        <h1 className="text-2xl">Contact Me</h1>
        <TextInput
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <TextInput
          value={subject}
          onChange={(e: any) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <Textarea
          value={body}
          onChange={(e: any) => setBody(e.target.value)}
          placeholder="Message"
        />
        <button
          className="bg-green-600 text-white font-bold py-2 rounded-md"
          type="submit"
        >
          SEND
        </button>
      </form>
    </section>
  );
};

export default FormContact;
