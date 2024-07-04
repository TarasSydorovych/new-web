"use client";
import { useState } from "react";
import css from "./header.module.css";
import Arrow from "../../svg/ArrowUpRight.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import ContactFormPopup from "../main/contactFormPopup";

const LetsTolkUa = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <div className={css.wrapButtonWithPop}>
      {" "}
      <div className={css.letsTolkButton} onClick={() => setShowPop(!showPop)}>
        Звʼязатись
      </div>
      {showPop && <ContactFormPopup setShowPop={setShowPop} />}
    </div>
  );
};
export default LetsTolkUa;
