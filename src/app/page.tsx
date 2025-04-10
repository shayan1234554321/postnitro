import { Button, Text, Title } from "@mantine/core";
import { ArrowRight, Check, Circle, Star } from "@phosphor-icons/react";
import Image from "next/image";
import "./page.css";
import { getTranslations } from "next-intl/server";
import {
  MainButton,
  Stars,
  SubButton,
  SubHeader,
} from "../components/helper/homepage/clientComponents";

export default async function HomePage() {
  const t = await getTranslations("homePage");

  return (
    <div suppressHydrationWarning className="homePage">
      <SubHeader />
      <Title order={1} className="header">
        {t("title")}
      </Title>
      <Text size="lg" style={{ color: "#475467", textAlign: "center" }} m="md">
        {t("description")}
      </Text>
      <div className="details">
        <Image
          className="user-collected"
          src="/user-collected.webp"
          alt="users"
          height={44}
          width={219}
        />
        <div className="creators">
          <div>
            <Stars />
            <Text style={{ fontWeight: "600", marginLeft: "0.375rem" }}>
              5.0
            </Text>
          </div>
          <Text style={{ color: "#475467" }}>{t("creators")}</Text>
        </div>
        <div className="divider" />
        <div>
          <Text style={{ fontWeight: "600" }}>{t("embedded.title")}</Text>
          <Text size="sm" style={{ color: "#475467" }}>
            {t("embedded.description")}
          </Text>
        </div>
        <Image
          src="/embed-collected.png"
          alt="Embedded Collection"
          height={44}
          width={191}
        />
      </div>
      <MainButton />
      <SubButton />
    </div>
  );
}
