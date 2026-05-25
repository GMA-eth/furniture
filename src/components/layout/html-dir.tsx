"use client";

import { useEffect } from "react";

interface HtmlDirProps {
  lang: string;
  dir: "ltr" | "rtl";
}

export function HtmlDir({ lang, dir }: HtmlDirProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (dir === "rtl") {
      document.documentElement.style.fontFamily = "";
    }
  }, [lang, dir]);

  return null;
}
