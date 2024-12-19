import React from "react";
import { UserNav } from "./user-nav";
import { LanguageToggle } from "./language-toggle";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="flex h-16 items-center px-6 justify-between">
        {/* Left Side: Logo or Title */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-zinc-50">
            First Finance
          </span>
          {/* Dropdown Icon (Optional) */}
          <span className="text-zinc-400 text-sm">▼</span>
        </div>

        {/* Center: Language Selector */}

        {/* Right Side: User Navigation */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <div className="text-zinc-200">
            <LanguageToggle />
          </div>
          <div className="relative flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-lg font-bold text-zinc-950">D.</span>
            </div>
            <span className="text-zinc-300 font-medium">Ahmed Mekawy</span>
          </div>
        </div>
      </div>
    </header>
  );
}
