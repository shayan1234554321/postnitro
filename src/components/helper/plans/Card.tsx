import React from "react";
import "./card.css";
import { Button, Text } from "@mantine/core";
import { CheckCircle, Lightning } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

type CardItem = {
  name: string;
  price: { monthly: string; yearly: string };
  saves?: string;
  focused?: boolean;
  perfectFor: string;
  features: string[];
};

const Card = ({
  item,
  period,
}: {
  item: CardItem;
  period: "monthly" | "yearly";
}) => {
  const isYearly = period === "yearly";
  const t = useTranslations("plans");

  return (
    <div className={`Card ${item.focused ? "focused" : ""}`}>
      <Text
        color="green.4"
        style={{ fontWeight: 700, marginBottom: "5px" }}
        size="xl"
      >
        {item.name}
      </Text>
      {isYearly && item.saves && (
        <Text
          style={{
            fontWeight: 500,
            textDecoration: "line-through",
            color: "red",
          }}
          size="sm"
        >
          {t("plans.common.previously")}: {item.price.monthly}
        </Text>
      )}
      <Text style={{ fontWeight: 700 }} size="xl">
        {item.price[period]}
      </Text>
      {isYearly && item.saves && (
        <Text
          style={{
            fontWeight: "600",
            textDecoration: "underline",
          }}
          size="md"
          color="green.4"
          mb="xs"
        >
          {item.saves}
        </Text>
      )}
      <Text color="dark.3" mb="sm" size="sm">
        {item.perfectFor}
      </Text>
      {item.features.map((feature) => (
        <div className="features" key={feature}>
          <CheckCircle size="24" style={{ minWidth: "24px" }} color="#098D78" />
          <Text key={feature}>{feature}</Text>
        </div>
      ))}
      <Button
        mt="md"
        mb="md"
        w="100%"
        color="green.4"
        leftSection={<Lightning size="16" />}
        variant={item.focused ? "filled" : "outline"}
      >
        {t("plans.common.button")}
      </Button>
      <Text size="xs">* {t("plans.common.taxes")}.</Text>
    </div>
  );
};

export default Card;
