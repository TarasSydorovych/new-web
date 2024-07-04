import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./app/i18n/settings";

// Встановлюємо мови для бібліотеки accept-language
acceptLanguage.languages(languages);

// Конфігурація мідлвера
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)/:lng*",
};

const cookieName = "i18next";

// Мідлвер для обробки запитів
export function middleware(req) {
  let lng;
  // Визначаємо мову запиту на основі куків або заголовків
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Перевіряємо, чи потрібно редіректити кореневий шлях
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${lng}`, req.url));
  }

  // Перевіряємо, чи запит відповідає будь-якому із визначених маршрутів
  const isMatched = req.nextUrl.pathname.match(/^\/(en|ua|fr|it)(\/|$)/);
  if (!isMatched) {
    // Якщо запит не відповідає жодному маршруту, повертаємо сторінку 404
    return NextResponse.error(new Error("Page Not Found"));
  }

  // Обробка запитів, які відповідають визначеним маршрутам
  // Додайте вашу логіку для обробки цих запитів

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
