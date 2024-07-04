import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "Website Development | WebUi-Studio",
    description:
      "Website development on platforms like WordPress, Webflow, and others. Creating websites from scratch for any purpose — business card sites, landing pages, e-commerce stores, corporate resources. To order a website at the best price, call now: +38093-724-61-93",
  },
  ua: {
    title: "Створення сайтів під ключ | WebUi-Studio",
    description:
      "Створення сайтів під ключ на платформі WordPress, webflow та інших. Розробка веб-сайту з нуля під будь-які цілі — візитка, лендінг, інтернет-магазин, корпоративний ресурс. Щоб замовити сайт по найкращій ціні, телефонуйте прямо зараз: +38093-724-61-93",
  },
};

export default function RootLayout({ children, params: { lng } }) {
  const metadata = metadataByLanguage[lng] || metadataByLanguage.en;

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
