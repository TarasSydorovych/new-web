import css from "./main.module.css";

import asd from "../../img/dotEnv.png";
import Image from "next/image";
import mirt from "../../img/coneweq.webp";
import bol from "../../img/bolre.webp";
import fre from "../../img/shibl.webp";
import MouseD from "../../svg/mouseSvg.svg";
import SendForm from "./sendForm";

import Sitca from "../../svg/sitca.svg";
import Link from "next/link";
import ArriwUp from "../../svg/arrow-up-right-small.svg";
import SendFormEn from "./sendFormEn";
import ButtonGetIt from "./buttonGetIt";
import ButtonGetItUa from "./ButtonGetItUa";
export default function FirstBlock({ t, lng }) {
  return (
    <section className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapFirstBlock}>
        <div className={css.mainBlockText}>
          <div className={css.smallBlocPD}>
            <h1 className={css.mainH1}>{t("mainTitle")}</h1>
            <p className={css.pMainF}>{t("mainDescSm")}</p>
            {lng === "en" ? <ButtonGetIt /> : <ButtonGetItUa />}
          </div>
        </div>
        <div className={css.blockWithModelFirst}>
          <Image src={mirt} className={css.imageFirst} alt="Photo" />
          <Image src={bol} className={css.bol} alt="Photo" />
          <Image src={fre} className={css.shib} alt="Photo" />
        </div>
        <div className={css.scrollDown}>
          <MouseD />
          <p className={css.scrollDoP}>{t("scrollName")}</p>
        </div>
      </div>
      {/**Messages send */}
      <div className={css.wrapSendForm}>
        <p className={css.freeConsultation}>{t("getFreeC")}</p>
        {lng === "en" ? <SendFormEn lng={lng} /> : <SendForm lng={lng} />}
      </div>
      <div className={css.wrapOurServise}>
        <div className={css.servMainTop}>
          <div className={css.servMainTopQW}>
            <div className={css.kvadrat}></div>
            <p className={css.ourServices}> {t("mainOurServ")}</p>
          </div>
          <div className={css.linePd}></div>
        </div>
        <div className={css.blockWrapServise}>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>01</span>
                {t("landTitle")}
              </h2>
              <p className={css.servDesc}>{t("lendDesc")}</p>
              <Link href={`/${lng}/landing`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>02</span>
                {t("businesTitile")}
              </h2>
              <p className={css.servDesc}>{t("businesDesc")}</p>
              <Link href={`/${lng}/business`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>03</span>
                {t("onlineTitile")}
              </h2>
              <p className={css.servDesc}>{t("onlineDesc")}</p>
              <Link href={`/${lng}/e-commerce`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>04</span>
                {t("crmInterTitile")}
              </h2>
              <p className={css.servDesc}>{t("crmInterDesc")}</p>
              <Link href={`/${lng}/crm`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>05</span>
                {t("designTitile")}
              </h2>
              <p className={css.servDesc}>{t("designDesc")}</p>
              <Link href={`/${lng}/design`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>
                <span className={css.landSpan}>06</span>
                {t("optimizaTitile")}
              </h2>
              <p className={css.servDesc}>{t("optimizaDesc")}</p>
              <Link href={`/${lng}/app`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
