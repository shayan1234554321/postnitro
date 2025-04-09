import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../util/theme";

export const metadata = {
  title: "Shayan",
  description: "Job Project",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        data-new-gr-c-s-check-loaded="14.1209.0"
        data-gr-ext-installed=""
        suppressHydrationWarning
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
