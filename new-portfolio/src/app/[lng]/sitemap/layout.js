import { Inter } from "next/font/google";

import { dir } from "i18next";
import { languages } from "../../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const metadataByLanguage = {
  en: {
    title: "CRM integration services | WebUi-Studio",
    description:
      "CRM integration services with e-commerce, VoIP telephony, Office 365, Shopify, social media, and other services. Affordable prices and high-quality services.",
  },
  ua: {
    title: "Інтеграція CRM систем | WebUi-Studio",
    description:
      "Інтеграція (впровадження, підключення) CRM систем для інтернет-магазину, логістики, малого та середнього бізнесу, віртуального офісу. Працюємо з KeyCrm, Perfectum, BPMonline, Sendpulse та іншими видами українських та зарубіжних CRM систем.",
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
