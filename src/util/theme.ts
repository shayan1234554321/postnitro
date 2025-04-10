"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    green: [
      "#0DC7A9", // lightest (index 0)
      "#0CB399",
      "#0BA089",
      "#098D78",
      "#087A68",
      "#076C5C", // default (index 5)
      "#065D50",
      "#054F43",
      "#044137",
      "#043931", // darkest (index 9)
    ],
    dark: [
      "#E9ECEF", // lightest (index 0)
      "#CED4DA",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33", // default (index 5)
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113", // darkest (index 9)
    ],
  },
});

