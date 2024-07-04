import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "Corporate / business website development | WebUi-Studio",
    description:
      "Corporate or business website development services. Unique design in a corporate style. Order a business website at the best price right now.",
  },
  ua: {
    title: "Розробка та створення корпоративних сайтів | WebUi-Studio",
    description:
      "Розробка та створення корпоративних сайтів під ключ. Дизайн, наповнення та просування. Замовте бізнес-сайт по найкращій ціні та насолоджуйтесь всіма перевагами корпоративного веб-ресурсу.",
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
