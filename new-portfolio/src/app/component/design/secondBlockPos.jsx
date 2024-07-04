import css from "../design/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import asd from "../../img/dotEnv.png";
import Sitca from "../../svg/bigWidthSitca.svg";
import On from "../../svg/01.svg";
import Tw from "../../svg/02.svg";
import Th from "../../svg/03.svg";
import appIconIfEw from "../../img/appIconIfEw.webp";
import Fo from "../../svg/04.svg";
import imortantImage from "../../img/imortantIcon.webp";
import GetItTouch from "../main/getItTouch";
import GridFourds from "../../svg/GridFourds.svg";
import StarFouras from "../../svg/StarFouras.svg";
import Java from "../../svg/java.svg";
import Kotlin from "../../svg/Kotlin_Icon.svg";
import ReactIcon from "../../svg/logo-react.svg";
import DeviceTabletasa from "../../svg/DeviceTabletasa.svg";

const SecondBlockPos = ({ t, lng }) => {
  return (
    <div className={css.secondWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapBussinesL}>
        {/* <div className={css.kvadratWhite}></div>
        <h3 className={css.advantPh3}>{t("threTitleApp")}</h3> */}
        <div className={css.wrapFirstBapp}>
          <div className={css.werticalLine}></div>
          <p className={css.advantPDescH3}>{t("threTitleDesign")}</p>
        </div>
      </div>
      <div className={css.threBlockL}>
        {" "}
        <div className={css.oneBlockNiFirstTw}>
          <p className={css.nameOneDescYwo}>{t("threFirstApp")}</p>
        </div>
        <div className={css.oneBlockNiFirstTw}>
          <p className={css.nameOneDescYwo}>{t("threSecondDesign")}</p>
        </div>
        <div className={css.oneBlockNiFirstTw}>
          <p className={css.nameOneDescYwo}>{t("threThreDesign")}</p>
        </div>
      </div>
      {/* <div className={css.threBlockL}>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>01</p>
          <p className={css.nameOneDesc}>{t("threFirstApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>02</p>
          <p className={css.nameOneDesc}>{t("threSecondApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>03</p>
          <p className={css.nameOneDesc}>{t("threThreApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>04</p>
          <p className={css.nameOneDesc}>{t("threFourApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>05</p>
          <p className={css.nameOneDesc}>{t("threFiveApp")}</p>
        </div>
      </div> */}

      <div className={css.importsntBlock}>
        <div className={css.textWrapIm}>
          <p className={css.imortantPTitle}>{t("important")}</p>
          <p className={css.descriptionsImortant}>{t("threDescDesign")}</p>
        </div>
        {/* <Image src={imortantImage} className={css.imortantImage} alt="Photo" /> */}
        <div className={css.imortantImage}></div>
      </div>
      <GetItTouch t={t} lng={lng} />
      {/* <div className={css.wrapLdse}>
        <div className={css.wrapBussinesLqw}>
          <div className={css.wrapFirstBapp}>
            <div className={css.kvadratWhite}></div>
            <h3 className={css.advantPh3}>{t("fourTitleBusines")}</h3>
          </div>{" "}
          <div className={css.wrapFirstBapp}>
            <div className={css.werticalLine}></div>
            <p className={css.advantPDescH3}>{t("fourDescApp")}</p>
          </div>
        </div>
        <Image src={appIconIfEw} className={css.appIconIfEw} alt="Photo" />
      </div> */}
      <div className={css.threBlockL}>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>01</p>
          <p className={css.nameOneDesc}>{t("fourFirstDesign")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>02</p>
          <p className={css.nameOneDesc}>{t("fourSecondDesign")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>03</p>
          <p className={css.nameOneDesc}>{t("fourThreDesign")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>04</p>
          <p className={css.nameOneDesc}>{t("fourFourDesign")}</p>
        </div>
      </div>
      <p className={css.lastPInBis}>{t("fourDescTwoDesign")}</p>
    </div>
  );
};
export default SecondBlockPos;
