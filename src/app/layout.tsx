import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import Providers from "../providers";
import { getLocale } from "next-intl/server";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/layout/header"));

export const metadata = {
  title: "Shayan",
  description: "Job Project",
};

export default async function RootLayout({ children }: { children: any }) {
  const locale = await getLocale();
  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Header locale={locale} />
          {children}</Providers>
      </body>
    </html>
  );
}
