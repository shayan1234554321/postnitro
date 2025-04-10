import { Button, Menu } from "@mantine/core";
import Image from "next/image";
import React from "react";
import setLanguageValue from "../../actions/set-language-action";

const CountrySelector = ({ locale }: { locale: string }) => {
  return (
    <Menu width={170} position="bottom-end">
      <Menu.Target>
        <Button
          variant="subtle"
          style={{
            backgroundColor: "rgba(206, 212, 218, 0.3)",
            border: "none",
            color: "black",
            padding: "0 10px",
          }}
          size="sm"
        >
          <Image
            src={`/flags/${locale}.svg`}
            alt={locale}
            width={24}
            height={24}
          />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <Image src="/flags/en.svg" alt="us" width={24} height={24} />
          }
          onClick={() => {
            setLanguageValue("en");
          }}
        >
          English
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Image src="/flags/zh.svg" alt="cn" width={24} height={24} />
          }
          onClick={() => {
            setLanguageValue("zh");
          }}
        >
          Chinese
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Image src="/flags/es.svg" alt="es" width={24} height={24} />
          }
          onClick={() => {
            setLanguageValue("es");
          }}
        >
          Espanol
        </Menu.Item>
        <Menu.Item
          leftSection={
            <Image src="/flags/fr.svg" alt="fr" width={24} height={24} />
          }
          onClick={() => {
            setLanguageValue("fr");
          }}
        >
          Francais
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CountrySelector;
