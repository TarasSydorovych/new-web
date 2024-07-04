"use client";
import css from "./header.module.css";
import { useEffect, useState } from "react";

export default function Check({ lng }) {
  const [isChecked, setIsChecked] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  useEffect(() => {
    if (lng === "en") {
      setIsChecked(true);
    }
    if (lng === "ua") {
      setIsChecked(false);
    }
  }, []);
  const handleRadioChange = () => {
    setIsChecked(!isChecked);
    const newLanguage = lng === "en" ? "ua" : "en";
    // Перенаправлення на сторінку з новою мовою
    window.location.href = `/${newLanguage}`;
  };
  console.log(isChecked);
  const handleLanguageClick = (event) => {
    // Зупинка подальшого поширення події кліку
    event.stopPropagation();
  };
  return (
    <div className={css.chaWr}>
      {" "}
      <label className={css.check} onClick={handleRadioChange}>
        {" "}
        <p className={css.uaLanguage} onClick={handleLanguageClick}>
          UA
        </p>
        <p className={css.enLanguage} onClick={handleLanguageClick}>
          EN
        </p>
        <input
          name="returns"
          type="radio"
          className={css.check__check}
          checked={isChecked}
          onChange={() => {}} // Порожня функція, щоб уникнути помилок
        />
        <span className={css.check__indicator}></span>
      </label>
    </div>
  );
}
