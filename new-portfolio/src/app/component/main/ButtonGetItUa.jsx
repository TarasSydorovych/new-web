"use client";
import React, { useState } from "react";

import css from "./main.module.css";
import ContactFormPopup from "./contactFormPopup";

const ButtonGetItUa = () => {
  const [showPop, setShowPop] = useState(false);
  return (
    <div className={css.wrapButtonWithPop}>
      <div className={css.buttotGetItT} onClick={() => setShowPop(!showPop)}>
        Зв&rsquo;яжіться з нами
      </div>
      {showPop && <ContactFormPopup setShowPop={setShowPop} />}
    </div>
  );
};

export default ButtonGetItUa;
