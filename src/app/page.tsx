import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return <div suppressHydrationWarning >{t("title")}</div>;
}
