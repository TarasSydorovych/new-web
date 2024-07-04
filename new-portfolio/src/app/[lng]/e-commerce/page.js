import Image from "next/image";
import styles from "./page.module.css";

import Header from "../../component/standartComponent/header";
import { useTranslation } from "../../i18n";
import "../../font/FuturaPT/stylesheet.css";
import "../../font/monrope/stylesheet.css";
import Footer from "../../component/standartComponent/footer";
import { ToastContainer } from "react-toastify";
import FirstBlock from "@/app/component/e-comers/firstBlock";
import SecondBlockPos from "@/app/component/e-comers/secondBlockPos";

const Ecomers = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <Header t={t} lng={lng} />
      <FirstBlock t={t} lng={lng} />
      <SecondBlockPos t={t} lng={lng} />
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Ecomers;
