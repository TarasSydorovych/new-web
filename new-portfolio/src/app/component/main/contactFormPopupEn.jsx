"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import css from "./main.module.css";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";

const ContactFormPopupEn = ({ setShowPop }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (!phone) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your phone number",
      });
      return;
    }

    const SERVICE_ID = "service_xh5ymdk";
    const TEMPLATE_ID = "template_zqbdjvp";
    const USER_ID = "My9e5IjpQ2yIY3t12";

    const templateParams = {
      user_name: name,
      user_email: email,
      Phone: phone,
      Subject: subject,
      message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message sent successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setShowPop(false);
  };

  return (
    <div className={css.popupContainer}>
      <form onSubmit={sendEmail} className={css.popupForm}>
        <p className={css.wrapPCont}>Thank you for contacting WebUi-Studio!</p>
        <p className={css.teamDs}>
          Please fill out the form below. Our team will get in touch with you as
          soon as possible.
        </p>
        <AiOutlineClose
          className={css.wrapsIconD}
          onClick={() => setShowPop(false)}
        />

        <input
          type="text"
          id="name"
          placeholder="Name"
          className={css.inputPopUp}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={css.inputPopUp}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          className={css.inputPopUp}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          className={css.inputPopUp}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className={css.inputPopUpArea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button onClick={sendEmail} className={css.buttonSendMeQW}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactFormPopupEn;
