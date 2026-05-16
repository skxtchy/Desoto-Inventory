'use client';

import Link from 'next/link';
import {
  Home,
  ScanLine,
  Package,
  ClipboardList,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-72 bg-[#2f241d] text-[#f5f1e8] p-6 rounded-r-3xl shadow-2xl border-r border-[#8b6f47]">
      <div>
        <h1 className="text-3xl font-bold">DeSoto House</h1>
        <p className="text-[#cbb89d] mt-1">
          Historic Bar Inventory
        </p>
      </div>

      <nav className="mt-10 space-y-3">
        <Link
          href="/"
          className="w-full flex items-center gap-4 bg-[#d4b483] text-black shadow-lg rounded-2xl px-5 py-4 font-semibold text-lg"
        >
          <Home size={24} />
          Dashboard
        </Link>

        <Link
          href="/scan"
          className="w-full flex items-center gap-4 hover:bg-[#46352b] rounded-2xl px-5 py-4 text-lg transition"
        >
          <ScanLine size={24} />
          Scan Bottles
        </Link>

        <Link
          href="/inventory"
          className="w-full flex items-center gap-4 hover:bg-[#46352b] rounded-2xl px-5 py-4 text-lg transition"
        >
          <Package size={24} />
          Inventory
        </Link>

        <Link
          href="/entries"
          className="w-full flex items-center gap-4 hover:bg-[#46352b] rounded-2xl px-5 py-4 text-lg transition"
        >
          <ClipboardList size={24} />
          Daily Entries
        </Link>

        <Link
          href="/reports"
          className="w-full flex items-center gap-4 hover:bg-[#46352b] rounded-2xl px-5 py-4 text-lg transition"
        >
          <BarChart3 size={24} />
          Reports
        </Link>

        <Link
          href="/low-stock"
          className="w-full flex items-center gap-4 hover:bg-[#46352b] rounded-2xl px-5 py-4 text-lg transition"
        >
          <AlertTriangle size={24} />
          Low Stock
        </Link>
      </nav>

      <div className="mt-auto bg-[#46352b] rounded-3xl p-5 border border-[#8b6f47]">
        <p className="text-sm text-[#cbb89d]">
          Connected Locations
        </p>

        <div className="mt-3 space-y-2 text-lg font-semibold">
          <p>• Green Street</p>
          <p>• Generals</p>
          <p>• Courtyard</p>
          <p>• Banquets</p>
        </div>
      </div>
    </aside>
  );
}