import css from "./service.module.css";
import asd from "../../img/dotEnv.png";
import Image from "next/image";
import Sitca from "../../svg/sitca.svg";
import Link from "next/link";
import ArriwUp from "../../svg/arrow-up-right-small.svg";
import Minus from "../../svg/minus.svg";
import Plus from "../../svg/plus.svg";
import asdf from "../../img/srvicesIconD.webp";
const FirstBlockService = ({ t, lng }) => {
  return (
    <section className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapFirstInServ}>
        <h1 className={css.h1ServOffer}>{t("offer")}</h1>
        <div className={css.blockWrapServise}>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("landTitle")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link href={`/${lng}/landing`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("businesTitile")}</h2>
              <p className={css.servDesc}>{t("secondOfferDesc")}</p>
              <Link href={`/${lng}/business`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("onlineTitile")}</h2>
              <p className={css.servDesc}>{t("threOfferDesc")}</p>
              <Link href={`/${lng}/e-commerce`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("crmInterTitile")}</h2>
              <p className={css.servDesc}>{t("fiveOfferDesc")}</p>
              <Link href={`/${lng}/crm`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("designTitile")}</h2>
              <p className={css.servDesc}>{t("sixOfferDesc")}</p>
              <Link href={`/${lng}/design`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <Sitca className={css.sitcaSt} />
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("optimizaTitile")}</h2>
              <p className={css.servDesc}>{t("fourOfferDesc")}</p>
              <Link href={`/${lng}/app`} className={css.moreDetails}>
                {t("moreDet")}
                <ArriwUp className={css.arrowUp} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrapFirstInServAsk}>
        <h2 className={css.h1ServOffer}>{t("queTitle")}</h2>
        <div className={css.wrapQuestAndG}>
          <div className={css.wrapAllQuestion}>
            <div className={css.wrapAllQuestion}>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>01</p>
                  <p className={css.pOneQiedsO}>{t("firstQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("firstAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>02</p>
                  <p className={css.pOneQiedsO}>{t("secondQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("secondAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>03</p>
                  <p className={css.pOneQiedsO}>{t("threQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("threAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>04</p>
                  <p className={css.pOneQiedsO}>{t("fourQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("fourAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>05</p>
                  <p className={css.pOneQiedsO}>{t("fiveQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("fiveAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>06</p>
                  <p className={css.pOneQiedsO}>{t("sixQuestion")}</p>
                </div>
                <Minus />
              </div>
              <p className={css.ansver}>{t("sixAnsver")}</p>
              <div className={css.line}></div>
            </div>
          </div>
          <Image src={asdf} className={css.asdf} alt="Photo" />
        </div>
      </div>
    </section>
  );
};
export default FirstBlockService;
