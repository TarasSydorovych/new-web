import css from "./main.module.css";
import Link from "next/link";
const InformWebsi = ({ t, lng }) => {
  return (
    <div className={css.wrapInformWeb}>
      <h2 className={css.h2InMainD}>{t("title")}</h2>
      <p className={css.pInWevWQ}>{t("smalDesc")}</p>
      <div className={css.firstBlofkDevAf}>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>01</span>

            <p className={css.servDesc}>{t("first")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>02</span>

            <p className={css.servDesc}>{t("second")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>03</span>

            <p className={css.servDesc}>{t("thre")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>04</span>

            <p className={css.servDesc}>{t("four")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>05</span>

            <p className={css.servDesc}>{t("five")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>06</span>

            <p className={css.servDesc}>{t("six")}</p>
          </div>
        </div>
        <div className={css.blockCssServAnather}>
          <div className={css.wrapSmallKLNew}>
            <span className={css.landSpan}>07</span>

            <p className={css.servDesc}>{t("seven")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformWebsi;
