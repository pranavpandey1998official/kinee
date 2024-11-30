import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, LinkedinIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/kinee/logo_hor.png"
              alt="Company Logo"
              width={120}
              height={40}
            />
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="https://www.facebook.com">
              <Facebook />
            </Link>

            <Link href="https://twitter.com">
              <Twitter />
            </Link>

            <Link href="https://www.linkedin.com">
              <LinkedinIcon />
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
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

        {/* Copyright Text */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kniee. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
