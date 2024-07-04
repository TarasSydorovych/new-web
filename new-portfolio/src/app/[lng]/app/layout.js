import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "Mobile app development company | WebUi-Studio",
    description:
      "Custom mobile app development services for Android and iOS. Development of corporate apps and e-commerce applications. WebUi-Studio is the best app development company near you.",
  },
  ua: {
    title: "Розробка мобільних додатків | WebUi-Studio",
    description:
      "Розробка та створення мобільних додатків під ключ для Android та iOS. Телефонуйте +38093-724-61-93 та дізнайтесь вартість розробки мобільного додатку під ваші потреби у нашого менеджера.",
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
