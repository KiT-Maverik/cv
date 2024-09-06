import { useCallback } from "react";
import { useToast } from "App/utilitary/ToastProvider/ToastProvider.hooks";

export const useCopyToClipboard = () => {
  const { showToast } = useToast();

  const copy = useCallback((text: string) => {
    if (window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast({ type: "info", message: "Copied" }))
        .catch(() =>
          showToast({ type: "error", message: "Something went wrong" }),
        );
    } else {
      console.error("The context is NOT secure");
    }
  }, []);

  return { copy };
};
