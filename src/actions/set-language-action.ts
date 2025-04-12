"use server"

import { cookies } from "next/headers";

export default async function setLanguageValue(locale: string) {
  const cookie = await cookies();
  cookie.set("language", locale);
}