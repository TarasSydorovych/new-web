import css from "../sitemap/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import Link from "next/link";
const FirstBlock = ({ t, lng }) => {
  return (
    <section className={css.firtBlockAbout}>
      <div className={css.listLandignd}>
        <p className={css.sitesMao}> {t("footer")}</p>
        <Link href={`/`} className={css.notActivLink}>
          {t("headerMain")}
        </Link>
        <Link href={`/${lng}/about`} className={css.notActivLink}>
          {t("headerAbout")}
        </Link>
        <Link href={`/${lng}/contact`} className={css.notActivLink}>
          {t("headerContact")}
        </Link>
        <Link href={`/${lng}/service`} className={css.notActivLink}>
          {t("headerServ")}
        </Link>
        <Link href={`/${lng}/landing`} className={css.notActivLink}>
          {t("landi")}
        </Link>
        <Link href={`/${lng}/business`} className={css.notActivLink}>
          {t("bussin")}
        </Link>
        <Link href={`/${lng}/e-commerce`} className={css.notActivLink}>
          {t("store")}
        </Link>
        <Link href={`/${lng}/app`} className={css.notActivLink}>
          {t("fourOfferName")}
        </Link>
        <Link href={`/${lng}/design`} className={css.notActivLink}>
          {t("sixOfferName")}
        </Link>
        <Link href={`/${lng}/crm`} className={css.notActivLink}>
          {t("fiveOfferName")}
        </Link>
      </div>
      {/* <div className={css.blockInFirst}>
        <div className={css.advantageWr}>
          <h1 className={css.advantTitleM}>{t("titleApp")}</h1>
          <p className={css.advantDescriptM}>{t("descApp")}</p>
        </div>
        <Image src={firstImage} className={css.firstImageSt} alt="Photo" />
      </div>
      <p className={css.appMainPT}>{t("firstTitleApp")}</p>
      <p className={css.appMaitPdescription}>{t("firstDescApp")}</p> */}
    </section>
  );
};
export default FirstBlock;
