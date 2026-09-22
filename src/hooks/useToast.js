import { useCallback, useRef, useState } from "react";

// A tiny toast: call show(message) and it appears at the bottom of the
// screen for a few seconds, then fades out on its own.
export function useToast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  const show = useCallback((msg, ms = 4200) => {
    clearTimeout(timer.current);
    setMessage(msg);
    setVisible(true);
    timer.current = setTimeout(() => setVisible(false), ms);
  }, []);

  return { message, visible, show };
}
