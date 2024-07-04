"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import css from "./main.module.css";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";

const ContactFormPopup = ({ setShowPop }) => {
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
        title: "Будь ласка, введіть телефон",
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
          title: "Повідомлення успішно надіслано",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ой, щось пішло не так",
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
        <p className={css.wrapPCont}>Дякуємо за звернення до WebUi-Studio!</p>
        <p className={css.teamDs}>
          Будь ласка, заповніть форму нижче. Наша команда зв&rsquo;яжеться з
          вами якомога швидше.
        </p>
        <AiOutlineClose
          className={css.wrapsIconD}
          onClick={() => setShowPop(false)}
        />

        <input
          type="text"
          id="name"
          placeholder="Імʼя"
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
          placeholder="Телефон"
          className={css.inputPopUp}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Тема"
          className={css.inputPopUp}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <textarea
          id="message"
          name="message"
          placeholder="Повідомлення"
          className={css.inputPopUpArea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button onClick={sendEmail} className={css.buttonSendMeQW}>
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ContactFormPopup;
