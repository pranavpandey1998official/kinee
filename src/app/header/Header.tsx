import Image from "next/image";
import Link from 'next/link';

export function Header() {
  return (
    <nav className="bg-secondary-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Image
            src="/kinee/logo_hor.png"
            alt="Kinee logo"
            width={120}
            height={40}
          />
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/">
            <p className="hover:text-gray-400">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-400">About</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-400">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
