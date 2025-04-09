import { MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "../util/theme";
import { NextIntlClientProvider } from "next-intl";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
