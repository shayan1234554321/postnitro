"use client";
import { Menu, Button, Pill, Text } from "@mantine/core";
import React from "react";
import "./header.css";
import Image from "next/image";
import { CaretDown, List, Sparkle, X } from "@phosphor-icons/react";
import CountrySelector from "../elements/countrySelector";
import Link from "next/link";
import { useRouter } from "next/navigation";

const menu = [
  {
    name: "Getting Started",
    list: [
      { name: "Docs", link: " https://postnitro.ai/docs" },
      { name: "Blog", link: "https://postnitro.ai/blog" },
      { name: "Affiliates", link: " https://ls.postnitro.ai/affiliates" },
    ],
  },
  {
    name: "Products",
    list: [
      {
        name: "LinkedIn Carousel",
        link: "https://postnitro.ai/carousels/linkedin",
      },
      {
        name: "Instagram Carousel",
        link: "https://postnitro.ai/carousels/instagram",
      },
      {
        name: "TikTok Carousel",
        link: "https://postnitro.ai/carousels/tiktok",
      },
      {
        name: "Twitter Carousel",
        link: "https://postnitro.ai/carousels/x-twitter",
      },
      {
        name: "Embed",
        link: "https://postnitro.ai/products/embed",
      },
      {
        name: "Extension",
        link: "https://postnitro.ai/products/extension",
      },
    ],
  },
  {
    name: "Free Tools",
    list: [
      {
        name: "Twitter Banner Maker",
        link: "https://postnitro.ai/free-ai-tools/twitter-free-banner-header-image-maker",
      },
      {
        name: "LinkedIn Banner Maker",
        link: "https://postnitro.ai/free-ai-tools/linkedin-free-banner-header-image-maker",
      },
      {
        name: "Instagram Grid Maker",
        link: "https://postnitro.ai/free-ai-tools/instagram-free-image-splitter-grid-maker",
      },
      {
        name: "LinkedIn Text Formatter",
        link: "https://postnitro.ai/free-ai-tools/linkedin-free-text-formatter",
      },
      {
        name: "LinkedIn Post Generator",
        link: "https://postnitro.ai/free-ai-tools/linkedin-free-post-generator",
      },
    ],
  },
];

const Header = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <nav className="nav" suppressHydrationWarning>
      <div suppressHydrationWarning>
        <div suppressHydrationWarning>
          <div className="left" suppressHydrationWarning>
            <Link href={"/"}>
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
                            fontSize: "16px",
                          }}
                          href={item.link}
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
                size="md"
                onClick={() => {
                  router.push("/plans");
                }}
              >
                Plans
              </Button>
            </div>
          </div>
          <div className="right" suppressHydrationWarning>
            <CountrySelector locale={locale} />
            <Button
              className="dontShowOnMobile"
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
                >
                  BETA
                </Pill>
              }
              onClick={() => {
                router.push("/app/post-maker");
              }}
            >
              Create Image Post
            </Button>
            <Button
              className="showOnlyOnMobile"
              variant="subtle"
              color="dark.9"
              leftSection={<List size={16} />}
              size="md"
              onClick={() => setMobileMenu(true)}
            >
              Menu
            </Button>
            <Button
               variant="filled"
               color="green.4"
               style={{
                 borderRadius: "10px",
               }}
              leftSection={<Sparkle size={16} />}
              size="md"
              onClick={() => {
                router.push("/app/carousel-maker");
              }}
            >
              Create <span className="dontShowOnMobile">Carousal</span>
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
                size="l"
                style={{ width: "max-content", fontWeight: "500" }}
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
              onClick={() => {
                router.push("/plans");
              }}
            >
              Plans
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
