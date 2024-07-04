import css from "../e-comers/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import asd from "../../img/dotEnv.png";
import Sitca from "../../svg/bigWidthSitca.svg";
import On from "../../svg/01.svg";
import Tw from "../../svg/02.svg";
import Th from "../../svg/03.svg";

import Fo from "../../svg/04.svg";
import imortantImage from "../../img/imortantIcon.webp";
import GetItTouch from "../main/getItTouch";
import GridFourds from "../../svg/GridFourds.svg";
import StarFouras from "../../svg/StarFouras.svg";

import DeviceTabletasa from "../../svg/DeviceTabletasa.svg";

const SecondBlockPos = ({ t, lng }) => {
  return (
    <div className={css.secondWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapBussinesL}>
        <div className={css.kvadratWhite}></div>
        <h3 className={css.advantPh3}>{t("firstTitleStore")}</h3>
        <div className={css.werticalLine}></div>
        <p className={css.advantPDescH3}>{t("firstDescStore")}</p>
      </div>
      <div className={css.threBlockL}>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>01</p>
          <p className={css.nameOneDesc}>{t("threFirstStore")}</p>
        </div>
        <div className={css.oneBlockNiSecond}>
          <p className={css.numberKter}>02</p>
          <p className={css.nameOneDesc}>{t("threSecondStore")}</p>
        </div>
        <div className={css.oneBlockNiThre}>
          <p className={css.numberKter}>03</p>
          <p className={css.nameOneDesc}>{t("threThreStore")}</p>
        </div>
      </div>
      <div className={css.wrapAnother}>
        <div className={css.oneBlockNiFour}>
          <p className={css.numberKter}>04</p>
          <p className={css.nameOneDesc}>{t("threFourStore")}</p>
        </div>
        <div className={css.wrapTwoSmall}>
          <div className={css.oneBlockNiFive}>
            <p className={css.numberKter}>05</p>
            <p className={css.nameOneDesc}>{t("threFive")}</p>
          </div>
          <div className={css.oneBlockNiSix}>
            <p className={css.numberKter}>06</p>
            <p className={css.nameOneDesc}>{t("threSix")}</p>
          </div>
        </div>
      </div>
      <div className={css.importsntBlock}>
        <div className={css.textWrapIm}>
          <p className={css.imortantPTitle}>{t("important")}</p>
          <p className={css.descriptionsImortant}>{t("threDescStore")}</p>
        </div>
        {/* <Image src={imortantImage} className={css.imortantImage} alt="Photo" /> */}
        <div className={css.imortantImage}></div>
      </div>
      <GetItTouch t={t} lng={lng} />
      <div className={css.wrapBussinesL}>
        <div className={css.kvadratWhite}></div>
        <h3 className={css.advantPh3}>{t("fourTitleBusines")}</h3>
        <div className={css.werticalLine}></div>
        <p className={css.advantPDescH3}>{t("fourDescBusines")}</p>
      </div>
      <section className={css.wrapWhoWillWork}>
        <div className={css.firstWrapInWill}>
          <h4 className={css.h4WillWork}>{t("fourTitleStore")}</h4>
          <p className={css.pWillWorkWdf}>{t("descTwo")}</p>
        </div>
        <div className={css.wrapWillWorkFour}>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}></div>
            <p className={css.pIndWillWorkMainSA}>{t("fourFirstStore")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}></div>
            <p className={css.pIndWillWorkMainSA}>{t("fourSecondStore")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}></div>
            <p className={css.pIndWillWorkMainSA}>{t("fourThreStore")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}></div>
            <p className={css.pIndWillWorkMainSA}>{t("fourFourStore")}</p>
          </div>
        </div>
      </section>
      <p className={css.lastPInBis}>{t("descThreStore")}</p>
    </div>
  );
};
export default SecondBlockPos;
