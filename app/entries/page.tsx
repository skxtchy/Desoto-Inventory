import {
  Package,
  AlertTriangle,
  ClipboardList,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 auto-rows-[220px]">

        <div className="xl:col-span-2 bg-[#f4e4c8]/95 backdrop-blur-xl rounded-[36px] border border-[#9b7447] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 flex flex-col justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/70 font-semibold">
              DeSoto House
            </p>

            <h1 className="text-5xl font-black text-black mt-3 leading-tight">
              Bar Inventory Dashboard
            </h1>

            <p className="text-black text-lg mt-4 max-w-2xl leading-relaxed">
              Real-time inventory management across Green Street,
              Generals, Courtyard, Banquets, and Liquor Room.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">

            <Link
              href="/entries"
              className="bg-[#b8833d] text-black px-6 py-4 rounded-2xl font-bold border border-[#7a5737] shadow-lg flex items-center gap-2 hover:bg-[#9f6d2f] transition-all"
            >
              + Add Entry
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/inventory"
              className="bg-[#d7b27a] text-black px-6 py-4 rounded-2xl font-bold border border-[#8a643d] shadow-lg hover:bg-[#c79c5e] transition-all"
            >
              Open Inventory
            </Link>

          </div>
        </div>

        <div className="bg-[#e2c79d] rounded-[36px] border border-[#a63d2f] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-7 flex flex-col justify-between">

          <div className="flex items-center justify-between">
            <AlertTriangle className="text-black" size={34} />

            <span className="bg-red-200 text-red-900 px-3 py-1 rounded-full text-xs font-bold">
              ATTENTION
            </span>
          </div>

          <div>
            <p className="text-black text-lg font-semibold">
              Low Stock
            </p>

            <h2 className="text-6xl font-black text-black mt-2">
              8
            </h2>

            <p className="text-black mt-2 font-medium">
              Bottles need ordering
            </p>
          </div>

        </div>

        <div className="bg-[#d7b27a] rounded-[36px] border border-[#8a643d] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-7 flex flex-col justify-between">

          <Package className="text-black" size={34} />

          <div>
            <p className="text-black text-lg font-semibold">
              Current Inventory
            </p>

            <h2 className="text-6xl font-black text-black mt-2">
              438
            </h2>

            <p className="text-black mt-2 font-medium">
              Total bottles tracked
            </p>
          </div>

        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[36px] border border-[#9b7447] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-7 flex flex-col justify-between">

          <ClipboardList className="text-black" size={34} />

          <div>
            <p className="text-black text-lg font-semibold">
              Pulled Today
            </p>

            <h2 className="text-6xl font-black text-black mt-2">
              42
            </h2>

            <p className="text-black mt-2 font-medium">
              Across all locations
            </p>
          </div>

        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[36px] border border-[#9b7447] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-7 flex flex-col justify-between">

          <TrendingUp className="text-black" size={34} />

          <div>
            <p className="text-black text-lg font-semibold">
              Received Today
            </p>

            <h2 className="text-6xl font-black text-black mt-2">
              28
            </h2>

            <p className="text-black mt-2 font-medium">
              Distributor deliveries
            </p>
          </div>

        </div>

        <div className="xl:col-span-2 bg-[#f4e4c8]/95 rounded-[36px] border border-[#9b7447] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 flex flex-col justify-between">

          <div className="flex items-center justify-between mb-6">

            <div>
              <p className="text-black text-xl font-bold">
                Connected Locations
              </p>

              <p className="text-black/70 mt-1">
                Active inventory tracking
              </p>
            </div>

            <div className="bg-[#b8833d] px-4 py-2 rounded-2xl border border-[#7a5737] font-bold text-black">
              5 Active
            </div>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

            {[
              'Green Street',
              'Generals',
              'Courtyard',
              'Banquets',
              'Liquor Room',
            ].map((location) => (
              <div
                key={location}
                className="bg-[#efe2c7] rounded-2xl border border-[#c7a06a] p-4 text-center shadow-sm"
              >

                <div className="w-3 h-3 rounded-full bg-green-600 mx-auto mb-3" />

                <p className="text-black font-bold text-sm leading-tight">
                  {location}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}