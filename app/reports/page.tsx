import { inventory } from '@/data/inventory';

export default function ReportsPage() {
  const totalBottles = inventory.reduce(
    (sum, item) => sum + item.stock,
    0
  );

  const lowStockCount = inventory.filter(
    (item) => item.lowStock
  ).length;

  const totalProducts = inventory.length;

  const categoryCounts = inventory.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const locationCounts = inventory.reduce((acc, item) => {
    acc[item.location] = (acc[item.location] || 0) + item.stock;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen p-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-black">
          Reports
        </h1>

        <p className="text-black text-lg mt-2">
          Live DeSoto House inventory analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-[#9b7447] shadow-xl p-6">
          <p className="text-black text-sm">
            Total Bottles
          </p>

          <h2 className="text-5xl font-bold text-black mt-2">
            {totalBottles}
          </h2>
        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-[#9b7447] shadow-xl p-6">
          <p className="text-black text-sm">
            Total Products
          </p>

          <h2 className="text-5xl font-bold text-black mt-2">
            {totalProducts}
          </h2>
        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-red-400 shadow-xl p-6">
          <p className="text-black text-sm">
            Low Stock Items
          </p>

          <h2 className="text-5xl font-bold text-red-700 mt-2">
            {lowStockCount}
          </h2>
        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-[#9b7447] shadow-xl p-6">
          <p className="text-black text-sm">
            Locations
          </p>

          <h2 className="text-5xl font-bold text-black mt-2">
            4
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-[#9b7447] shadow-xl p-8">
          <h2 className="text-3xl font-bold text-black mb-6">
            Top Categories
          </h2>

          <div className="space-y-4">
            {topCategories.map(([category, count]) => (
              <div
                key={category}
                className="flex items-center justify-between bg-[#efe2c7] rounded-2xl p-4 border border-[#9b7447]"
              >
                <p className="text-black font-semibold text-lg">
                  {category}
                </p>

                <p className="text-black font-bold text-xl">
                  {count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f4e4c8]/95 rounded-[28px] border border-[#9b7447] shadow-xl p-8">
          <h2 className="text-3xl font-bold text-black mb-6">
            Inventory By Location
          </h2>

          <div className="space-y-4">
            {Object.entries(locationCounts).map(
              ([location, total]) => (
                <div
                  key={location}
                  className="flex items-center justify-between bg-[#efe2c7] rounded-2xl p-4 border border-[#9b7447]"
                >
                  <p className="text-black font-semibold text-lg">
                    {location}
                  </p>

                  <p className="text-black font-bold text-xl">
                    {total}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}