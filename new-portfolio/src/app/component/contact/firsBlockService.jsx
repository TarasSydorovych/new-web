import css from "./service.module.css";
import asd from "../../img/dotEnv.png";
import Image from "next/image";
import Sitca from "../../svg/sitcaBigContact.svg";
import Link from "next/link";
import ArriwUp from "../../svg/arrow-up-right-small.svg";
import Minus from "../../svg/minus.svg";
import Plus from "../../svg/plus.svg";
import asdf from "../../img/praport.png";
import Location from "../../svg/location.svg";
import Phone from "../../svg/phone-call.svg";
import Email from "../../svg/email.svg";
import cdrf from "../../img/uaCqa.png";
import MapPin from "../../svg/MapPin.svg";
const FirstBlockService = ({ t, lng }) => {
  return (
    <section className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapFirstInServ}>
        <h1 className={css.h1ServOffer}>{t("titleContact")}</h1>
        <div className={css.wrapContact}>
          <div className={css.wrapContainData}>
            <div className={css.wrapAllD}>
              {" "}
              <Image src={asdf} className={css.asdf} alt="Photo" />
              <div className={css.blockCssServ}>
                <Sitca className={css.sitcaSt} />
                <div className={css.contactInFooter}>
                  <div className={css.wrapAddresWithIcon}>
                    <Location />
                  </div>
                  <div className={css.wrapAddresWithIcon}>
                    <Phone className={css.iconStyleF} />
                    <div className={css.wrapWew}>
                      <p className={css.phonelLS}>{t("phone")}</p>
                      <p className={css.phoneWhite}>+380937246193</p>
                    </div>
                  </div>
                  <div className={css.wrapAddresWithIcon}>
                    <Email className={css.iconStyleF} />
                    <div className={css.wrapWew}>
                      <p className={css.phonelLS}>Email</p>
                      <p className={css.phoneWhite}>
                        webui.dev.studio@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.mapOp}>
            <MapPin className={css.mapPin} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirstBlockService;
