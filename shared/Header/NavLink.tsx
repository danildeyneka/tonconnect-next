import Link from 'next/link';

export const NavLink = ({ to, title }: { to: string; title: string }) => (
  <Link href={to} className="text-center bg-purple-300 hover:bg-purple-400 opacity-75 text-xl rounded-lg text-white p-3 m-3">
    {title}
  </Link>
);
