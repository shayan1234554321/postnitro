"use client";
import { Menu, Button, Pill, Text } from "@mantine/core";
import React from "react";
import "./header.css";
import Image from "next/image";
import { CaretDown, List, Sparkle, X } from "@phosphor-icons/react";
import CountrySelector from "../elements/countrySelector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Header = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const t = useTranslations("nav");

  const menu = [
    {
      name: t("menu.Getting Started.name"),
      list: [
        { name: t("menu.Getting Started.list.1.name"), link: " https://postnitro.ai/docs" },
        { name: t("menu.Getting Started.list.2.name"), link: "https://postnitro.ai/blog" },
        { name: t("menu.Getting Started.list.3.name"), link: " https://ls.postnitro.ai/affiliates" },
      ]
    },
    {
      name: t("menu.Products.name"),
      list: [
        { name: t("menu.Products.list.1.name"), link: "https://postnitro.ai/carousels/linkedin" },
        { name: t("menu.Products.list.2.name"), link: "https://postnitro.ai/carousels/instagram" },
        { name: t("menu.Products.list.3.name"), link: "https://postnitro.ai/carousels/tiktok" },
        { name: t("menu.Products.list.4.name"), link: "https://postnitro.ai/carousels/x-twitter" },
        { name: t("menu.Products.list.5.name"), link: "https://postnitro.ai/products/embed" },
        { name: t("menu.Products.list.6.name"), link: "https://postnitro.ai/products/extension" },
      ]
    },
    {
      name: t("menu.Free Tools.name"),
      list: [
        { name: t("menu.Free Tools.list.1.name"), link: "https://postnitro.ai/free-ai-tools/twitter-free-banner-header-image-maker" },
        { name: t("menu.Free Tools.list.2.name"), link: "https://postnitro.ai/free-ai-tools/linkedin-free-banner-header-image-maker" },
        { name: t("menu.Free Tools.list.3.name"), link: "https://postnitro.ai/free-ai-tools/instagram-free-image-splitter-grid-maker" },        
        { name: t("menu.Free Tools.list.4.name"), link: "https://postnitro.ai/free-ai-tools/linkedin-free-text-formatter" },
        { name: t("menu.Free Tools.list.5.name"), link: "https://postnitro.ai/free-ai-tools/linkedin-free-post-generator" },
      ]
    }
  ]

  return (
    <nav className="nav" suppressHydrationWarning>
      <div suppressHydrationWarning>
        <div suppressHydrationWarning>
          <div className="left" suppressHydrationWarning>
            <Link href={"/"} style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
              <Image
                src="/logo-full.svg"
                alt="logo"
                width={510}
                height={121}
                className="logo"
              />
            </Link>
            <div suppressHydrationWarning>
              {menu.map((item, index) => (
                <Menu key={index}>
                  <Menu.Target>
                    <Button
                      variant="subtle"
                      color="green.4"
                      style={{ color: "black" }}
                      rightSection={<CaretDown size={16} />}
                      size="md"
                      className="textMD"
                    >
                      {item.name}
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {item.list.map((item, index) => (
                      <Menu.Item key={item.link + index}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "500",
                          }}
                          href={item.link}
                          className="textMD"
                        >
                          {item.name}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              ))}
              <Button
                variant="subtle"
                style={{
                  backgroundColor: "none",
                  border: "none",
                  color: "black",
                }}
                color="green.4"
                size="md"
                className="textMD"
                onClick={() => {
                  router.push("/plans");
                }}
              >
                {t("menu.plans")}
              </Button>
            </div>
          </div>
          <div className="right" suppressHydrationWarning>
            <CountrySelector locale={locale} />
            <Button
              className="dontShowOnMobile textMD"
              variant="outline"
              color="green.4"
              style={{
                borderRadius: "10px",
              }}
              leftSection={<Sparkle size={16} />}
              size="md"
              rightSection={
                <Pill
                  style={{
                    background:
                      "linear-gradient(105deg, #38d9a9 0%, #a9e34b 100%)",
                    color: "white",
                  }}
                  size="xs"
                  className="textXS"
                >
                  BETA
                </Pill>
              }
              onClick={() => {
                router.push("/app/post-maker");
              }}
            >
              {t("buttons.imagePost")}
            </Button>
            <Button
              className="showOnlyOnMobile textMD"
              variant="subtle"
              color="dark.9"
              leftSection={<List size={16} />}
              size="md"
              onClick={() => setMobileMenu(true)}
            >
              {t("buttons.menu")}
            </Button>
            <Button
               variant="filled"
               color="green.4"
               style={{
                 borderRadius: "10px",
               }}
              leftSection={<Sparkle size={16} />}
              size="md"
              className="textMD"
              onClick={() => {
                router.push("/app/carousel-maker");
              }}
            >
              {t("buttons.createCarousal.1")} <span className="dontShowOnMobile">&nbsp;{t("buttons.createCarousal.2")}</span>
            </Button>
          </div>
        </div>
        <div
          className={`showOnlyOnMobile mobileMenu ${mobileMenu ? "show" : ""}`}
        >
          <div className="close" suppressHydrationWarning >
            <Button
              color="dark.9"
              variant="subtle"
              onClick={() => setMobileMenu(false)}
            >
              <X size={24} />
            </Button>
          </div>
          {menu.map((item, index) => (
            <div key={index}>
              <Text
                size="md"
                style={{ width: "max-content", fontWeight: "500" }}
                className="textMD"
              >
                {item.name}
              </Text>
              {item.list.map((item, index) => (
                <Button
                  color="green.4"
                  variant="subtle"
                  size="md"
                  key={item.link + index}
                  onClick={() => {
                    router.push(item.link);
                  }}
                className="textMD"
                >
                  <Text size="l" style={{ width: "max-content" }}>
                    {item.name}
                  </Text>
                </Button>
              ))}
            </div>
          ))}
          <div>
            <Button
              color="green.4"
              variant="subtle"
              size="lg"
              className="textLG"
              onClick={() => {
                router.push("/plans");
              }}
            >
              {t("menu.plans")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
