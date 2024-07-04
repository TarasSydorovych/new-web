import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "E-commerce Website Development services | WebUi-Studio",
    description:
      "Custom e-commerce website development services. We create online stores on platforms such as Magento, WordPress, Shopify, and others. Individual design and affordable pricing.",
  },
  ua: {
    title: "Розробка інтернет-магазину під ключ | WebUi-Studio",
    description:
      "Створення інтернет-магазинів під ключ. Замовте розробку ефективного онлайн магазину з продажу одягу, білизни або інших товарів та отримуйте прибуток, не виходячи з дому. Телефонуйте прямо зараз: +38093-724-61-93 та почніть продавати вже сьогодні.",
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
