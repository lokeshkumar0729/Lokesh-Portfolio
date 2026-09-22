// Decorative, illustrative thumbnails for the compact project list.
// They are not screenshots — just visual hints at what each project does.

export function PlacementThumb() {
  return (
    <svg viewBox="0 0 176 124" aria-hidden="true">
      <g fill="none" stroke="#3a3d3a">
        <rect x="14" y="22" width="40" height="22" rx="6" />
        <rect x="68" y="22" width="40" height="22" rx="6" fill="#b6f23a" stroke="none" />
        <rect x="122" y="22" width="40" height="22" rx="6" />
        <path d="M54 33h14M108 33h14" stroke="#b6f23a" strokeWidth="1.6" />
        <path d="M142 44v22" stroke="#b6f23a" strokeWidth="1.6" />
        <rect x="14" y="66" width="148" height="18" rx="6" />
        <path d="M88 84v12" stroke="#b6f23a" strokeWidth="1.6" />
        <rect x="58" y="96" width="60" height="16" rx="6" />
      </g>
    </svg>
  );
}

export function EmployeeThumb() {
  return (
    <svg viewBox="0 0 176 124" aria-hidden="true">
      <g>
        <rect x="14" y="16" width="148" height="26" rx="8" fill="#171917" stroke="#2a2d2a" />
        <circle cx="30" cy="29" r="6" fill="#2e312e" />
        <rect x="44" y="24" width="52" height="5" rx="2.5" fill="#e9ebe6" />
        <rect x="44" y="33" width="34" height="4" rx="2" fill="#4a4d49" />
        <rect x="128" y="24" width="24" height="10" rx="5" fill="none" stroke="#b6f23a" />

        <rect x="14" y="48" width="148" height="26" rx="8" fill="#171917" stroke="#2a2d2a" />
        <circle cx="30" cy="61" r="6" fill="#2e312e" />
        <rect x="44" y="56" width="66" height="5" rx="2.5" fill="#e9ebe6" />
        <rect x="44" y="65" width="40" height="4" rx="2" fill="#4a4d49" />
        <rect x="128" y="56" width="24" height="10" rx="5" fill="none" stroke="#b6f23a" />

        <rect x="14" y="80" width="148" height="26" rx="8" fill="#171917" stroke="#2a2d2a" />
        <circle cx="30" cy="93" r="6" fill="#2e312e" />
        <rect x="44" y="88" width="46" height="5" rx="2.5" fill="#e9ebe6" />
        <rect x="44" y="97" width="30" height="4" rx="2" fill="#4a4d49" />
        <rect x="128" y="88" width="24" height="10" rx="5" fill="none" stroke="#b6f23a" />
      </g>
    </svg>
  );
}

export function DsaThumb() {
  return (
    <svg viewBox="0 0 176 124" aria-hidden="true">
      <g fontFamily="ui-monospace, Menlo, Consolas, monospace" fontSize="10">
        <text x="14" y="24" fill="#6d716b">// O(log N), O(1)</text>
        <text x="14" y="42" fill="#b6f23a">int</text>
        <text x="32" y="42" fill="#e9ebe6">lo = 0, hi = n - 1;</text>
        <text x="14" y="58" fill="#b6f23a">while</text>
        <text x="42" y="58" fill="#e9ebe6">(lo &lt;= hi) {"{"}</text>
        <text x="24" y="74" fill="#e9ebe6">mid = lo + (hi - lo) / 2;</text>
        <text x="24" y="90" fill="#e9ebe6">...</text>
        <text x="14" y="106" fill="#e9ebe6">{"}"}</text>
      </g>
    </svg>
  );
}

export const THUMBS = {
  placement: PlacementThumb,
  employee: EmployeeThumb,
  dsa: DsaThumb,
};
