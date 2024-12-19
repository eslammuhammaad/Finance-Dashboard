import React from "react";
import { LanguageToggle } from "./language-toggle";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="flex h-16 items-center px-6 justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-zinc-50">
            First Finance
          </span>
          <span className="text-zinc-400 text-sm">▼</span>
        </div>
        <div className="flex items-center space-x-4">
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
