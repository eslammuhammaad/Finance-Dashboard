"use client";

import {
  LayoutDashboard,
  BarChart,
  DollarSign,
  Wallet,
  File,
  Users,
  Camera,
  AlertCircle,
  DoorOpen,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center bg-black text-white h-screen w-16 py-4 z-50">
      {/* Logo */}
      <div className="mb-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/f50a/71c6/a2f6d1a94ff7c3e42c10148d147be41c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZJjYP8d0VPHnbtmixwqdr4Pzwo95qNtl-RZml081M5QBRwJk2PZ8GY1Gfr-5rvYrvWnAGciJKUrUs5qOgwMoi-vOfnDE7dydCtZ3MUdWPgCGX-SY4u3nC69NyEGTO-t6f6vP2WrGRC7v-XN~h3W1Mb2~QEQ~YrQS-5tdF0lvCV5XfCO-rr93X5zBFKbSb45ygnergHWRf4Vhcy2h5OROSzM6SIWdwqDmN03nVmRb~tP5~Vy4ZSJuIJbc5ykGJK3QZeLizZ8M3AQnXJD4CPKC0wXzf~bp6EMtxxDC01Pwl6V4mHv4Kv41gaQMkHq84n0wZeZHDrhJmF~hBgbU8xrijQ__"
          alt=""
        />
      </div>

      {/* Icons */}
      <nav className="flex-1 space-y-6">
        <NavItem icon={LayoutDashboard} />
        <NavItem icon={BarChart} />
        <NavItem icon={DollarSign} />
        <NavItem icon={Wallet} />
        <NavItem icon={File} />
        <NavItem icon={Users} />
        <NavItem icon={Camera} />
        <NavItem icon={AlertCircle} />
      </nav>

      {/* Footer */}
      <div className="mt-auto">
      <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer text-red-600">
        <NavItem icon={DoorOpen}  />
        </div>

      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, className }: { icon: any; className?: string }) {
  return (
    <div
      className={`p-2 hover:bg-gray-700 rounded-md cursor-pointer ${className}`}
    >
      <Icon size={24} />
    </div>
  );
}
