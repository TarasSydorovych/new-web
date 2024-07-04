import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "Website design services | WebUi-Studio",
    description:
      "Custom website design development services for e-commerce, single-page and business websites. WebUi-Studio is a website design development company near you.",
  },
  ua: {
    title: "Розробка дизайну сайту | WebUi-Studio",
    description:
      "Розробка та створення веб-дизайну сайтів по індивідуальним замовленням. Телефонуйте прямо зараз: +38093-724-61-93 та замовне унікальний дизайн для свого онлайн ресурсу.",
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
