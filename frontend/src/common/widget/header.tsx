import { navData } from "@/shared/config/constants";
import { NavDataTypes } from "@/shared/config/types";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b border-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* navigation */}
          <nav className="flex">
            <ul className="flex gap-5 md:gap-5 flex-wrap items-center">
              {navData.map((e: NavDataTypes, idx: number) => (
                <li key={idx}>
                  <Link
                    className="text-sm md:text-lg font-medium hover:underline"
                    href={e.path}
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
