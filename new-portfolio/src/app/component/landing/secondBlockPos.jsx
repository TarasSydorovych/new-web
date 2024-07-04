import css from "../landing/about.module.css";
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
      <h2 className={css.advantP}>{t("firstTitle")}</h2>
      <p className={css.advantPDesc}>{t("firstDesc")}</p>
      <h3 className={css.advantPh3}>{t("threTitle")}</h3>
      <p className={css.advantPDescH3}>{t("threDesc")}</p>
      <div className={css.threBlockL}>
        <div className={css.oneBlockNi}>
          <On className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threFirst")}</p>
        </div>
        <div className={css.oneBlockNi}>
          <Tw className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threSecond")}</p>
        </div>
        <div className={css.oneBlockNi}>
          <Th className={css.iconInBlockIm} />
          <p className={css.nameOneDesc}>{t("threThre")}</p>
        </div>
      </div>
      <GetItTouch t={t} lng={lng} />
    </div>
  );
};
export default SecondBlockPos;
