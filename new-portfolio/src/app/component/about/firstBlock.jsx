import css from "../about/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
const FirstBlock = ({ t, lng }) => {
  return (
    <section className={css.firtBlockAbout}>
      <div className={css.blockInFirst}>
        <div className={css.advantageWr}>
          <h1 className={css.advantTitleM}>{t("titleAbout")}</h1>
          <p className={css.advantDescriptM}>{t("mainDesc")}</p>
        </div>
        <Image src={firstImage} className={css.firstImageSt} alt="Photo" />
      </div>
    </section>
  );
};
export default FirstBlock;
