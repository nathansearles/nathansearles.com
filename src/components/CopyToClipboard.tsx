"use client";

import { useEffect, useState } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { Button } from "@/components/ui/button";
import { useHoverSupport } from "@/hooks/useHoverSupport";

export function CopyToClipboard({ text }: { text: string }) {
  const clipboard = useClipboard();
  const [wasClicked, setWasClicked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const isHoverSupported = useHoverSupport();

  useEffect(() => {
    if (clipboard.copied) {
      setWasClicked(true);
      setIsCopied(true);
      const wasClickedTimeout = setTimeout(() => setWasClicked(false), 2000);
      const isCopiedTimeout = setTimeout(() => setIsCopied(false), 1675);
      return () => {
        clearTimeout(wasClickedTimeout);
        clearTimeout(isCopiedTimeout);
      };
    }
  }, [clipboard.copied]);

  const label =
    wasClicked && clipboard.copied
      ? "Copied"
      : isHoverSupported && !clipboard.copied
        ? "Copy to Clipboard"
        : "Copied";

  return (
    <Button
      onClick={() => clipboard.copy(text)}
      aria-label={`${label}: ${text}`}
      className={isCopied ? "is-active" : ""}
    >
      <span data-text={label}>{text}</span>
    </Button>
  );
}
