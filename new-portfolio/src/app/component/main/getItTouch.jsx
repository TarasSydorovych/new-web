import css from "./main.module.css";
import asd from "../../img/dotEnv.png";
import Sitca from "../../svg/sitca.svg";
import Link from "next/link";
import qwe from "../../img/adsew.webp";
import Image from "next/image";
import fde from "../../img/fdsf.webp";
import ButtonGetIt from "./buttonGetIt";
import ButtonGetItUa from "./ButtonGetItUa";
const GetItTouch = ({ t, lng }) => {
  return (
    <div className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <Image src={qwe} className={css.imageFirstGet} alt="Photo" />
      <Image src={fde} className={css.imageFirstGetTwo} alt="Photo" />
      <p className={css.getItTMain}>{t("write")}</p>
      <p className={css.eigthBlockLetItT}>{t("eight")}</p>
      <p className={css.answerDs}>{t("pContact")}</p>
      <div className={css.wrapToZ}>
        {lng === "en" ? <ButtonGetIt /> : <ButtonGetItUa />}
      </div>
    </div>
  );
};
export default GetItTouch;
