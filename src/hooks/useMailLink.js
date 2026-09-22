import { useCallback } from "react";

export function useMailLink(email, showToast) {
  return useCallback(
    (e) => {
      // Allow the mailto link to work normally
      // and copy the email address as a convenience.
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }

      showToast(`Email address copied: ${email}`, 3200);
    },
    [email, showToast]
  );
}