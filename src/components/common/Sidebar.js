import Link from "next/link";

const Sidebar = () => (
  <nav className="bg-gray-200 w-60 h-screen fixed">
    <ul>
      <li><Link href="/dashboard">Dashboard</Link></li>
      <li><Link href="/news">News</Link></li>
      <li><Link href="/payout">Payout</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
