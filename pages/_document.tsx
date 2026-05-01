import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGE ROUTER");
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="title" content="Nestar Demo" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

      {/* SEO */}
      <meta
        name="keyword"
        content="nestar, nestar.uz, devx, mern, mern nest.js fullstack"
      />
      <meta
        name="description"
        content={
          "Buy and sell properties anywere, anytime in South Korea. | " +
          "Покупайте и продавайте недвижимость где угодно и в любое время в Южной Корее. | " +
          "대한민국 어디서든 언제든지 부동산을 사고팔 수 있습니다."
        }
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
