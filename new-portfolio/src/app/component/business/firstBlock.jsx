import css from "../business/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import Link from "next/link";
const FirstBlock = ({ t, lng }) => {
  return (
    <section className={css.firtBlockAbout}>
      <div className={css.listLandignd}>
        <Link href={`/${lng}/landing`} className={css.notActivLink}>
          {t("landi")}
        </Link>
        <Link href={`/${lng}/business`} className={css.activLink}>
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
      <div className={css.blockInFirst}>
        <div className={css.advantageWr}>
          <h1 className={css.advantTitleM}>{t("titleBusines")}</h1>
          <p className={css.advantDescriptM}>{t("descBusines")}</p>
        </div>
        <Image src={firstImage} className={css.firstImageSt} alt="Photo" />
      </div>
    </section>
  );
};
export default FirstBlock;
