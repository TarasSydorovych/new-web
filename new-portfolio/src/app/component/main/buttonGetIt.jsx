"use client";
import { useState } from "react";
import css from "./main.module.css";
import Arrow from "../../svg/ArrowUpRight.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import ContactFormPopup from "./contactFormPopup";
import ContactFormPopupEn from "./contactFormPopupEn";
const ButtonGetIt = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <div className={css.wrapButtonWithPop}>
      {" "}
      <div className={css.buttotGetItT} onClick={() => setShowPop(!showPop)}>
        Get in touch
      </div>
      {showPop && <ContactFormPopupEn setShowPop={setShowPop} />}
    </div>
  );
};
export default ButtonGetIt;
