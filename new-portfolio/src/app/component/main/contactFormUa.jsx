"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import css from "./main.module.css";
import Image from "next/image";
import iconD from "../../img/contactIcons.webp";
const ContactFormUA = () => {
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
  };

  return (
    <div className={css.wrapFormInD}>
      <div className={css.wrapFroms}>
        <div className={css.wrapTurkney}>
          <div className={css.whiteBox}></div>
          <p className={css.turkneyP}>Зв&rsquo;яжіться з нами</p>
        </div>
        <p className={css.descContacForm}>
          WebUi — це дійсно якісна розробка сайтів. Щоб отримати web-ресурс,
          котрий ефективно посприяє розвитку вашого бізнесу, обов&rsquo;язково
          звертайтеся до нас. Будемо раді допомогти!
        </p>

        <div className={css.wrapFormInputs}>
          <div className={css.wrapInputsData}>
            <input
              className={css.inputsForm}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Імʼя"
            />
            <input
              className={css.inputsForm}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className={css.inputsForm}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
            />
            <input
              className={css.inputsForm}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Тема"
            />
          </div>
          <div className={css.twoFormWrap}>
            <textarea
              className={css.textArreaMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Повідомлення"
            />
            <div className={css.buttonSend} onClick={sendEmail}>
              Надіслати
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrapIconsF}>
        <Image src={iconD} className={css.iconD} alt="Photo" />
      </div>
    </div>
  );
};

export default ContactFormUA;
