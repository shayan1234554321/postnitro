import { MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "../util/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default Providers;
