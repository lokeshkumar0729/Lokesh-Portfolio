import { useEffect, useRef, useState } from "react";
import { apiConsole } from "../data/site-data";

export default function ApiConsole() {
  const [key, setKey] = useState("student");
  const [onCount, setOnCount] = useState(0); // how many rows have animated in
  const timers = useRef([]);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const caller = apiConsole.callers[key];

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setOnCount(0);

    if (reduceMotion.current) {
      setOnCount(caller.rows.length);
      return;
    }
    caller.rows.forEach((_, i) => {
      const t = setTimeout(() => setOnCount((c) => Math.max(c, i + 1)), 260 + i * 240);
      timers.current.push(t);
    });
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <div className="console" role="group" aria-label="Interactive example of role-based API access">
      <div className="con-top">
        <div className="dots" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
        <div className="seg" role="group" aria-label="Choose who is calling the API">
          {Object.entries(apiConsole.callers).map(([k, c]) => (
            <button
              key={k}
              type="button"
              aria-pressed={key === k}
              onClick={() => setKey(k)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="con-body">
        <div className="con-h">
          Authorization: <b>{caller.authHeader}</b>
          <br />
          role: <b>{caller.role}</b>
        </div>

        <div className="con-rows" aria-live="polite">
          {caller.rows.map((r, i) => {
            const ok = r.status < 300;
            return (
              <div key={r.method + r.path} className={`row${i < onCount ? " on" : ""}`}>
                <span className="m">{r.method}</span>
                <span className="p">{r.path}</span>
                <span className={`s ${ok ? "ok" : "no"}`}>
                  {r.status} {r.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="con-note">{apiConsole.note}</p>
    </div>
  );
}
