// components/SetTitle.tsx
"use client";

import { useEffect } from "react";

interface SetTitleProps {
  pageTitle: string;
}

export const SetTitle = ({ pageTitle }: SetTitleProps) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return null; // Komponen ini tidak merender apa pun
};
