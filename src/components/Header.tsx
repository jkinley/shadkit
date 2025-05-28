import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="p-4 flex bg-black text-white justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold flex gap-4">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  );
}
