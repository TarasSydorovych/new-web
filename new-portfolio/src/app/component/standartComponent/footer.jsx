import css from "./header.module.css";
import Link from "next/link";
import Logo from "../../svg/logo.svg";
import { useTranslation } from "../../i18n";
import Location from "../../svg/location.svg";
import Phone from "../../svg/phone-call.svg";
import Email from "../../svg/email.svg";
const Footer = ({ t, lng }) => {
  return (
    <footer className={css.footer}>
      <div className={css.wrapFirstBlockFooter}>
        <Logo />

        <div className={css.contactInFooter}>
          <p className={css.mainInFoorteP}>{t("constact")}</p>
          <div className={css.wrapAddresWithIcon}>
            <Location />
          </div>
          <div className={css.wrapAddresWithIcon}>
            <Phone className={css.iconStyleF} />
            <div className={css.wrapWew}>
              <p className={css.phonelLS}>{t("phone")}</p>
              <a
                href="tel:+380937246193"
                className={css.phoneWhite}
                target="_blank"
                rel="noopener noreferrer"
              >
                +380937246193
              </a>
            </div>
          </div>
          <div className={css.wrapAddresWithIcon}>
            <Email className={css.iconStyleF} />
            <div className={css.wrapWew}>
              <p className={css.phonelLS}>Email</p>
              <a
                href="mailto:webui.dev.studio@gmail.com"
                className={css.phoneWhite}
                target="_blank"
                rel="noopener noreferrer"
              >
                webui.dev.studio@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={css.wrapServices}>
          <p className={css.mainInFoorteP}>{t("headerServ")}</p>
          <Link href={`/${lng}/landing`} className={css.linkFooterToS}>
            {t("landi")}
          </Link>
          <Link href={`/${lng}/business`} className={css.linkFooterToS}>
            {t("bussin")}
          </Link>
          <Link href={`/${lng}/e-commerce`} className={css.linkFooterToS}>
            {t("store")}
          </Link>
          <Link href={`/${lng}/crm`} className={css.linkFooterToS}>
            {t("crm")}
          </Link>

          <Link href={`/${lng}/app`} className={css.linkFooterToS}>
            {t("app")}
          </Link>
        </div>
        <div className={css.wrapAboutList}>
          <Link href={`/${lng}/about`} className={css.mainInFoortePFlf}>
            {t("about")}
          </Link>
          <Link href={`/${lng}/contact`} className={css.mainInFoortePFlf}>
            {t("constact")}
          </Link>
          {/* <Link href={`/${lng}`} className={css.mainInFoortePFlf}>
            {t("blog")}
          </Link> */}
        </div>
      </div>
      <div className={css.lineInFooter}></div>
      <div className={css.wrapCopivra}>
        <p className={css.copiwrt}>
          © Copyright 2023 WebUi-Studio. All rights reserved.
        </p>
        <Link href={`/${lng}/sitemap`} className={css.copiwrtLink}>
          {t("sitemap")}
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
