import css from "./main.module.css";
import asd from "../../img/dotEnv.png";
import Sitca from "../../svg/sitcaJBig.svg";
import Link from "next/link";
import Image from "next/image";
const TurcneyWeb = ({ t, lng }) => {
  return (
    <div className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <h2 className={css.h2InMainD}>{t("titleTwo")}</h2>
      <p className={css.pInWevWQqw}>{t("smalDescTwo")}</p>
      <div className={css.firstBlofkDevAf}>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>01</span>

            <p className={css.servDesc}>{t("firstTwo")}</p>
          </div>
        </div>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>02</span>

            <p className={css.servDesc}>{t("secondTwo")}</p>
          </div>
        </div>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>03</span>

            <p className={css.servDesc}>{t("threTwo")}</p>
          </div>
        </div>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>04</span>

            <p className={css.servDesc}>{t("fourTwo")}</p>
          </div>
        </div>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>05</span>

            <p className={css.servDesc}>{t("fiveTwo")}</p>
          </div>
        </div>
        <div className={css.blockCssServBigSitca}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>06</span>

            <p className={css.servDesc}>{t("eightTwo")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TurcneyWeb;
