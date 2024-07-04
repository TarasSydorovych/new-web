import css from "../about/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import asd from "../../img/dotEnv.png";
import kub from "../../img/kubInAbout.webp";
import First from "../../svg/firsLine.svg";
import Second from "../../svg/secontLine.svg";
import Thre from "../../svg/threLine.svg";
import Four from "../../svg/fourLine.svg";
import Five from "../../svg/fiveLine.svg";
import On from "../../svg/01.svg";
import Tw from "../../svg/02.svg";
import Th from "../../svg/03.svg";
import Fo from "../../svg/04.svg";
import WillWorkOne from "../../svg/willWorkOne.svg";
import WillWorkTwo from "../../svg/willWorkTwo.svg";
import WillWorkThre from "../../svg/willWorkThre.svg";
import WillWorkFour from "../../svg/willWorkFour.svg";
import GetItTouch from "../main/getItTouch";
const SecondBlockPos = ({ t, lng }) => {
  return (
    <div className={css.secondWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}
      <Image src={asd} className={css.datFirst} alt="Photo" />
      <Image src={asd} className={css.datSecond} alt="Photo" />
      <div className={css.wrapTwoBlockInfo}>
        <div className={css.oneBlockWrapd}>
          <div className={css.blockKvadratWWrap}>
            <div className={css.kvadratWhite}></div>
            <h2 className={css.greyDescUt}>WebUi-Studio</h2>
          </div>
          <p className={css.desctInSerd}>{t("firstText")}</p>
        </div>
        <div className={css.oneBlockWrapd}>
          <div className={css.blockKvadratWWrap}>
            <div className={css.kvadratWhite}></div>
            <h2 className={css.greyDescUt}>{t("misionTitle")}</h2>
          </div>
          <p className={css.desctInSerd}>{t("misionDesc")}</p>
        </div>
      </div>
      <Image src={kub} className={css.kubSt} alt="Photo" />
      <div className={css.ourGoalWrap}>
        <h3 className={css.secondPGoal}>{t("secondTitle")}</h3>
        <p className={css.goalPDecsription}>{t("secondDesc")}</p>
        <div className={css.wrapGoalList}>
          <div className={css.oneBlockInGolaB}>
            <On className={css.iconInNumber} />
            <p className={css.blockDescritpionsBel}>{t("firstAbout")}</p>
          </div>
          <div className={css.oneBlockInGolaB}>
            <Tw className={css.iconInNumber} />
            <p className={css.blockDescritpionsBel}>{t("secondAbout")}</p>
          </div>
          <div className={css.oneBlockInGolaB}>
            <Th className={css.iconInNumber} />
            <p className={css.blockDescritpionsBel}>{t("threAbout")}</p>
          </div>
          <div className={css.oneBlockInGolaB}>
            <Fo className={css.iconInNumber} />
            <p className={css.blockDescritpionsBel}>{t("fourAbout")}</p>
          </div>
          <First className={css.firstLineIn} />
          <Second className={css.firstLineIn} />
          <Thre className={css.firstLineIn} />
          <Four className={css.firstLineIn} />
          <Five className={css.firstLineIn} />
        </div>
      </div>
      <section className={css.wrapWhoWillWork}>
        <div className={css.firstWrapInWill}>
          <h4 className={css.h4WillWork}>{t("tOne")}</h4>
          <p className={css.pWillWorkWdf}>{t("tTwo")}</p>
        </div>
        <div className={css.wrapWillWorkFour}>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}>
              <WillWorkOne className={css.willWorkIconsd} />
            </div>
            <p className={css.pIndWillWorkMainSA}>{t("tThre")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}>
              <WillWorkTwo className={css.willWorkIconsd} />
            </div>
            <p className={css.pIndWillWorkMainSA}>{t("tFour")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}>
              <WillWorkThre className={css.willWorkIconsd} />
            </div>
            <p className={css.pIndWillWorkMainSA}>{t("tFive")}</p>
          </div>
          <div className={css.oneWillWorkL}>
            <div className={css.mainWillWithIconWr}>
              <WillWorkFour className={css.willWorkIconsd} />
            </div>
            <p className={css.pIndWillWorkMainSA}>{t("tSix")}</p>
          </div>
        </div>
      </section>
      <GetItTouch t={t} lng={lng} />
    </div>
  );
};
export default SecondBlockPos;
