import Image from "next/image";
import styles from "./page.module.css";

import Header from "../../component/standartComponent/header";
import { useTranslation } from "../../i18n";
import "../../font/FuturaPT/stylesheet.css";
import "../../font/monrope/stylesheet.css";
import Footer from "../../component/standartComponent/footer";
import { ToastContainer } from "react-toastify";
import FirstBlockService from "@/app/component/contact/firsBlockService";
import ContactForm from "@/app/component/main/contactForm";
import ContactFormUA from "@/app/component/main/contactFormUa";

const Contact = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <Header t={t} lng={lng} />
      <FirstBlockService t={t} lng={lng} />
      {lng === "en" ? <ContactForm /> : <ContactFormUA />}
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Contact;
