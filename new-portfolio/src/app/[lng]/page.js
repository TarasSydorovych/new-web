import Image from "next/image";
import styles from "./page.module.css";
import css from "../component/main/main.module.css";
import Header from "../component/standartComponent/header";
import FirstBlock from "../component/main/firstBlock";
import { useTranslation } from "../i18n";
import dynamic from "next/dynamic";
import "../font/FuturaPT/stylesheet.css";
import "../font/monrope/stylesheet.css";
import OurWorks from "../component/main/ourWorks";
import AboutUs from "../component/main/aboutUs";
import InformWebsi from "../component/main/informWebsi";
import GetItTouch from "../component/main/getItTouch";
import TurcneyWeb from "../component/main/turcneyWeb";
import ContactForm from "../component/main/contactForm";
import ContactFormUA from "../component/main/contactFormUa";
import Footer from "../component/standartComponent/footer";
import { ToastContainer } from "react-toastify";

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <Header t={t} lng={lng} />
      <FirstBlock t={t} lng={lng} />
      <AboutUs t={t} lng={lng} />
      {/* <OurWorks /> */}
      <InformWebsi t={t} lng={lng} />
      <GetItTouch t={t} lng={lng} />
      <TurcneyWeb t={t} lng={lng} />

      {lng === "en" ? <ContactForm /> : <ContactFormUA />}
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Home;
