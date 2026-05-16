export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-gradient-to-br from-[#fff8ee] to-[#eadcc6] rounded-3xl shadow-2xl p-6 border border-[#b08a5a]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Bar Inventory System
            </h1>

            <p className="text-black text-lg">
              Green Street • Generals • Courtyard • Banquets
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#2f241d] text-[#f5f1e8] px-5 py-3 rounded-2xl font-semibold hover:bg-[#46352b] shadow-lg border border-[#8b6f47]">
              + Add Entry
            </button>

            <button className="bg-[#8b6f47] text-[#fffaf2] px-5 py-3 rounded-2xl font-semibold hover:opacity-90 shadow-lg">
              Scan Bottle
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#fff8ee] to-[#eadcc6] rounded-3xl shadow-2xl p-6 border border-[#b08a5a]">
          <h2 className="text-2xl font-semibold">
            Current Inventory
          </h2>

          <p className="text-5xl font-bold mt-3">438</p>

          <p className="text-black mt-2">
            Total Bottles
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#fff8ee] to-[#eadcc6] rounded-3xl shadow-2xl p-6 border border-[#b08a5a]">
          <h2 className="text-2xl font-semibold">
            Pulled Today
          </h2>

          <p className="text-5xl font-bold mt-3">42</p>

          <p className="text-black mt-2">
            Across All Bars
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#fff8ee] to-[#eadcc6] rounded-3xl shadow-2xl p-6 border border-[#b08a5a]">
          <h2 className="text-2xl font-semibold">
            Received Today
          </h2>

          <p className="text-5xl font-bold mt-3">28</p>

          <p className="text-black mt-2">
            Distributor Deliveries
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#fff8ee] to-[#eadcc6] rounded-3xl shadow-2xl p-6 border border-[#a63d2f]">
          <h2 className="text-2xl font-semibold">
            Low Stock
          </h2>

          <p className="text-5xl font-bold mt-3">8</p>

          <p className="text-black mt-2">
            Needs Ordering
          </p>
        </div>
      </div>
    </div>
  );
}