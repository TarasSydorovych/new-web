"use client";
import { useState } from "react";
import css from "./header.module.css";
import Arrow from "../../svg/ArrowUpRight.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import ContactFormPopupEn from "../main/contactFormPopupEn";
const LetsTolkEn = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <div className={css.wrapButtonWithPop}>
      {" "}
      <div className={css.letsTolkButton} onClick={() => setShowPop(!showPop)}>
        Let’s talk!
      </div>
      {showPop && <ContactFormPopupEn setShowPop={setShowPop} />}
    </div>
  );
};
export default LetsTolkEn;
