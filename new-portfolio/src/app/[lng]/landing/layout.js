import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "Web development landing page | WebUi-Studio",
    description:
      "Landing page development services for medium and small businesses. Custom design and affordable prices. Start selling your products today.",
  },
  ua: {
    title: "Замовити лендінг у WebUi-Studio",
    description:
      "Розробка та створення лендінгу на замовлення. Краща ціна на односторінковий сайт. Не гайте час. Телефонуйте прямо зараз: +38093-724-61-93 та почніть ефективно продавати вже сьогодні.",
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
