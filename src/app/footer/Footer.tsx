import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, LinkedinIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Company Logo */}
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
        </div>

        {/* Copyright Text */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kniee. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
