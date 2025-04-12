"use client";
import React from "react";
import "./page.css";
import { Badge, Button, SegmentedControl, Text, Title } from "@mantine/core";
import Card from "../../components/helper/plans/Card";
import { CheckCircle, Lightning } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const Page = () => {
  const [period, setPeriod] = React.useState<"monthly" | "yearly">("monthly");
  const t = useTranslations("plans");

  const plans = [
    {
      name: t("plans.1.name"),
      price: {
        monthly: t("plans.1.price.monthly"),
        yearly: t("plans.1.price.yearly"),
      },
      perfectFor: t("plans.1.perfectFor"),
      features: [
        t("plans.1.features.1"),
        t("plans.1.features.2"),
        t("plans.1.features.3"),
        t("plans.1.features.4"),
      ],
    },
    {
      name: t("plans.2.name"),
      price: {
        monthly: t("plans.2.price.monthly"),
        yearly: t("plans.2.price.yearly"),
      },
      focused: true,
      saves: t("plans.2.saves"),
      perfectFor: t("plans.2.perfectFor"),
      features: [
        t("plans.2.features.1"),
        t("plans.2.features.2"),
        t("plans.2.features.3"),
        t("plans.2.features.4"),
        t("plans.2.features.5"),
        t("plans.2.features.6"),
        t("plans.2.features.7"),
        t("plans.2.features.8"),
      ],
    },
    {
      name: t("plans.3.name"),
      price: {
        monthly: t("plans.3.price.monthly"),
        yearly: t("plans.3.price.yearly"),
      },
      saves: t("plans.3.saves"),
      perfectFor: t("plans.3.perfectFor"),
      features: [
        t("plans.3.features.1"),
        t("plans.3.features.2"),
        t("plans.3.features.3"),
        t("plans.3.features.4"),
      ],
    },
  ];

  return (
    <div suppressHydrationWarning className="plansPage">
      <Title order={1} className="header">
        {t("subTitle")}
      </Title>
      <Text size="lg" style={{ color: "#475467", textAlign: "center" }} m="md">
        {t("title")}
      </Text>
      <SegmentedControl
        data={[
          { label: t("monthly"), value: "monthly" },
          { label: t("yearly"), value: "yearly" },
        ]}
        size="sm"
        style={{ borderRadius: "10px" }}
        styles={{
          indicator: { borderRadius: "7px" },
          innerLabel: { padding: "40px" },
        }}
        value={period}
        onChange={(value) => setPeriod(value as "monthly" | "yearly")}
      />
      {period === "yearly" && (
        <Badge color="green.4" size="lg" mt="md">
          {t("off")}
        </Badge>
      )}
      <div className="plansContainer">
        {plans.map((plan, i) => (
          <Card key={i} item={plan} period={period} />
        ))}
      </div>
      <Text mt="xl" mb="xl" style={{ fontStyle: "italic" }}>
        {t("limits.1")}{" "}
        <a
          style={{
            color: "#065D50",
            textDecoration: "underline",
            fontWeight: "500",
          }}
          href="https://postnitro.ai/docs/how-to/manage-subscription/additional-limits"
          target="_blank"
        >
          {t("limits.2")}
        </a>{" "}
        {t("limits.3")}
      </Text>
      <div
        className="Card"
        style={{
          display: "flex",
          gap: "5px",
          maxWidth: "570px",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <div>
          <Text
            color="green.4"
            style={{ fontWeight: 700, textAlign: "center" }}
            size="xl"
          >
            {t("freePlan.name")}
          </Text>
          <Text style={{ fontWeight: 700, textAlign: "center" }} size="xl">
            {t("freePlan.price")}
          </Text>
          <Text color="dark.3" style={{ textAlign: "center" }} size="sm">
            {t("freePlan.perfectFor")}
          </Text>
        </div>
        <div>
          <div className="features">
            <CheckCircle
              size="24"
              style={{ minWidth: "24px" }}
              color="#098D78"
            />
            <Text>{t("freePlan.features.1")}</Text>
          </div>
          <div className="features">
            <CheckCircle
              size="24"
              style={{ minWidth: "24px" }}
              color="#098D78"
            />
            <Text>{t("freePlan.features.2")}</Text>
          </div>
          <div className="features">
            <CheckCircle
              size="24"
              style={{ minWidth: "24px" }}
              color="#098D78"
            />
            <Text>{t("freePlan.features.3")}</Text>
          </div>
        </div>
        <Button
          mt="md"
          mb="md"
          color="green.4"
          leftSection={<Lightning size="16" />}
          variant="outline"
        >
          {t("plans.common.button")}
        </Button>
      </div>
    </div>
  );
};

export default Page;
