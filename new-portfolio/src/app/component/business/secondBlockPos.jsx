import css from "../business/about.module.css";
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
      <Dot className={css.datSecond} /> */}{" "}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapBussinesL}>
        <div className={css.kvadratWhite}></div>
        <h3 className={css.advantPh3}>{t("firstTitleBusines")}</h3>
        <div className={css.werticalLine}></div>
        <p className={css.advantPDescH3}>{t("firstDescBusines")}</p>
      </div>
      <div className={css.threBlockL}>
        <div className={css.oneBlockNi}>
          <On className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threFirstBusines")}</p>
        </div>
        <div className={css.oneBlockNi}>
          <Tw className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threSecondBusines")}</p>
        </div>
        <div className={css.oneBlockNi}>
          <Th className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threThreBusines")}</p>
        </div>
        <div className={css.oneBlockNi}>
          <Fo className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threFour")}</p>
        </div>
      </div>
      <div className={css.importsntBlock}>
        <div className={css.textWrapIm}>
          <p className={css.imortantPTitle}>{t("important")}</p>
          <p className={css.descriptionsImortant}>{t("threDescBusines")}</p>
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
      <div className={css.threBlockL}>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <GridFourds className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourFirstBusines")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <StarFouras className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourSecondBusines")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <DeviceTabletasa className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourThreBusines")}</p>
          </div>
        </div>
      </div>
      <p className={css.lastPInBis}>{t("fourDescTwo")}</p>
    </div>
  );
};
export default SecondBlockPos;
