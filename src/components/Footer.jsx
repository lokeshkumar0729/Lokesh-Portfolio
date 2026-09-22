import { profile } from "../data/site-data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
