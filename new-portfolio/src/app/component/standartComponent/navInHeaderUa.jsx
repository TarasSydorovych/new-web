"use client";
import { useEffect, useState } from "react";
import css from "./header.module.css";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavInHeaderUa = () => {
  const [windowDimensions, setWindowDimensions] = useState(true);
  const [headerSticky, setHeaderSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 874) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={css.wrapNavO}>
      {windowDimensions === false && (
        <div className={css.clacKfff}>
          <AiOutlineMenu
            className={css.iconBurger}
            onClick={() => setMenu(true)}
          />
        </div>
      )}
      {!windowDimensions === false && (
        <ul className={css.ulStyle}>
          <li className={css.liSt}>
            <Link href={`/ua`}>Головна</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/ua/about`}>Про нас</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/ua/service`}>Послуги</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/ua/contact`}>Контакти</Link>
          </li>
        </ul>
      )}
      {menu && (
        <div className={css.wrapMenuBurger}>
          <AiOutlineClose
            className={css.closePopUoI}
            onClick={() => setMenu(false)}
          />
          <ul className={css.ulStyleMunu}>
            <li className={css.liStI}>
              <Link href={`/ua`}>Головна</Link>
            </li>
            <li className={css.liStI}>
              <Link href={`/ua/about`}>Про нас</Link>
            </li>
            <li className={css.liStI}>
              <Link href={`/ua/service`}>Послуги</Link>
            </li>
            <li className={css.liStI}>
              <Link href={`/ua/contact`}>Контакти</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default NavInHeaderUa;
