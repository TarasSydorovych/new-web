"use client";
import { useState } from "react";
import css from "./main.module.css";
import Arrow from "../../svg/ArrowUpRight.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function SendForm() {
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Будь ласка, введіть телефон",
        text: "Телефон повинен містити мінімум 10 символів.",
        confirmButtonColor: "#d3d3d3",
      });
      return;
    }

    const SERVICE_ID = "service_xh5ymdk";
    const TEMPLATE_ID = "template_zqbdjvp";
    const USER_ID = "My9e5IjpQ2yIY3t12";

    const templateParams = {
      Phone: phone,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Повідомлення успішно надіслано",
          confirmButtonColor: "#d3d3d3",
        });
        setPhone("");
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ой, щось пішло не так",
          text: error.text,
          confirmButtonColor: "#d3d3d3",
        });
      }
    );
  };

  return (
    <div className={css.wrapInput}>
      <input
        className={css.inputPhone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Телефон"
      />
      <button className={css.buttonSendMe} onClick={sendEmail}>
        Відправити
        <Arrow className={css.arrowUp} />
      </button>
    </div>
  );
}
