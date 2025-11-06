/* 
    import { useClipboard } from './useClipboard';

    function Demo() {
        const clipboard = useClipboard({ timeout: 500 });

        return (
            <button
            color={clipboard.copied ? 'teal' : 'blue'}
            onClick={() => clipboard.copy('Hello, world!')}
            >
            {clipboard.copied ? 'Copied' : 'Copy'}
            </button>
        );
    }
*/
"use client";

import { useState, useEffect, useCallback } from "react";

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeout !== null) {
        window.clearTimeout(copyTimeout);
      }
    };
  }, [copyTimeout]);

  const handleCopyResult = useCallback(
    (value: boolean) => {
      if (copyTimeout !== null) {
        window.clearTimeout(copyTimeout);
      }
      const timeoutId = window.setTimeout(() => setCopied(false), timeout);
      setCopyTimeout(timeoutId);
      setCopied(value);
    },
    [copyTimeout, timeout],
  );

  const copy = useCallback(
    (valueToCopy: string) => {
      if ("clipboard" in navigator) {
        navigator.clipboard
          .writeText(valueToCopy)
          .then(() => {
            handleCopyResult(true);
            setError(null); // Clear previous errors
          })
          .catch((err) => setError(err));
      } else {
        setError(
          new Error("useClipboard: navigator.clipboard is not supported"),
        );
      }
    },
    [handleCopyResult],
  );

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
    if (copyTimeout !== null) {
      window.clearTimeout(copyTimeout);
      setCopyTimeout(null);
    }
  }, [copyTimeout]);

  return { copy, reset, error, copied };
}
