"use client";

import { Button, Text } from "@mantine/core";
import { ArrowRight, Check, Circle, Star } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export const SubHeader = () => {
  const t = useTranslations("homePage");

  return (
    <Button
      size="md"
      style={{
        pointerEvents: "none",
        borderColor: "rgba(0,0,0,0.2)",
        background: "#fff",
      }}
      variant="outline"
      color="dark.9"
      mb="md"
      leftSection={<Circle size={12} weight="fill" fill="#098D78" />}
    >
      {t("subTitle")}
    </Button>
  );
};

export const Stars = () => {
  return (
    <>
      <Star size="20" fill="#ffac2f" weight="fill" />
      <Star size="20" fill="#ffac2f" weight="fill" />
      <Star size="20" fill="#ffac2f" weight="fill" />
      <Star size="20" fill="#ffac2f" weight="fill" />
      <Star size="20" fill="#ffac2f" weight="fill" />
    </>
  );
};

export const MainButton = () => {
  const t = useTranslations("homePage");

  return (
    <Button
      mt="lg"
      mb="xs"
      rightSection={<ArrowRight size="20" />}
      color="green.4"
      size="lg"
    >
      {t("button")}
    </Button>
  );
};

export const SubButton = () => {
  const t = useTranslations("homePage");
  return (
    <Text variant="subtle" color="green.7" style={{ pointerEvents: "none" }}>
      <Check size="16" />
      &nbsp;{t("subButton")}
    </Text>
  );
};
