import css from "./header.module.css";
import Link from "next/link";
import Logo from "../../svg/logo.svg";
import { useTranslation } from "../../i18n";

import Check from "./check";
import LetsTolkUa from "./letsTolkUa";
import LetsTolkEn from "./letsTolkEn";
import NavInHeader from "./navInHeader";
import NavInHeaderUa from "./navInHeaderUa";
export default function Header({ t, lng }) {
  return (
    <header className={css.header}>
      {" "}
      <Logo className={css.logoInG} />
      <nav className={css.navStyle}>
        {/* <ul className={css.ulStyle}>
          <li className={css.liSt}>
            <Link href={`/${lng}`}>{t("headerMain")}</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/${lng}/about`}>{t("headerAbout")}</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/${lng}/service`}>{t("headerServ")}</Link>
          </li>
          <li className={css.liSt}>
            <Link href={`/${lng}/contact`}>{t("headerContact")}</Link>
          </li>
        </ul> */}

        {lng === "en" ? <NavInHeader /> : <NavInHeaderUa />}
      </nav>
      <div className={css.wrapCheckerWithPop}>
        <Check lng={lng} />
        {lng === "en" ? <LetsTolkEn /> : <LetsTolkUa />}
      </div>
    </header>
  );
}
