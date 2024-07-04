import css from "./main.module.css";
import Sitca from "../../svg/asSitka.svg";
import piram from "../../img/qwePiramida.png";
import Image from "next/image";
import CodeExp from "../../svg/codeExp.svg";
import Dugk from "../../svg/BracketsCurly.svg";
import MessageD from "../../svg/messagedD.svg";
const AboutUs = ({ t, lng }) => {
  return (
    <section className={css.aboutUsWrap}>
      {" "}
      <div className={css.smallAboutWrap}>
        {" "}
        <div className={css.firstBlockAbout}>
          <Sitca className={css.sitcaB} />
          <Image src={piram} className={css.piramO} alt="Photo" />
        </div>
        <div className={css.wrapDescAbout}>
          <div className={css.wrapWithLine}>
            <div className={css.servMainTopQW}>
              <div className={css.kvadrat}></div>
              <p className={css.ourServices}>{t("aboutUsTitle")}</p>
            </div>{" "}
            <div className={css.linePdTwo}></div>
          </div>
          <div className={css.wrapDescWiTitle}>
            <div className={css.wrapTitleWithIco}>
              <div className={css.wrapIconOne}>
                <CodeExp className={css.codeExp} />
              </div>
              <h3 className={css.aboutTitle}>{t("aboutFirstTitle")}</h3>
            </div>
            <p className={css.pAboutDesc}>{t("aboutFirst")}</p>
          </div>
          <div className={css.wrapDescWiTitle}>
            <div className={css.wrapTitleWithIco}>
              <div className={css.wrapIconOne}>
                <Dugk className={css.codeExp} />
              </div>
              <h3 className={css.aboutTitle}>{t("aboutSecondTitle")}</h3>
            </div>
            <p className={css.pAboutDesc}>{t("aboutSecond")}</p>
          </div>
          <div className={css.wrapDescWiTitle}>
            <div className={css.wrapTitleWithIco}>
              <div className={css.wrapIconOne}>
                <MessageD className={css.codeExp} />
              </div>
              <h3 className={css.aboutTitle}>{t("aboutThreTitle")}</h3>
            </div>
            <p className={css.pAboutDesc}>{t("aboutThre")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
