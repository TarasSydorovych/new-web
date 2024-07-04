import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "WebUi-Studio website Development Services | Custom Web Solutions",
    description:
      "Our company offers website development services for various industries, including landing pages, corporate websites, and e-commerce solutions. We will create a unique website for your business.",
  },
  ua: {
    title: "WebUi-Studio послуги з Розробки Сайтів | Індивідуальні Веб-Рішення",
    description:
      "Наша компанія пропонує послуги з розробки сайтів для різних сфер, включаючи лендинги, корпоративні сайти та інтернет-магазини. Ми створимо унікальний веб-сайт для вашого бізнесу.",
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
