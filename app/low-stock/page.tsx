import { inventory } from '@/data/inventory';

export default function LowStockPage() {
  const lowStockItems = inventory.filter(
    (item) => item.lowStock
  );

  return (
    <div className="min-h-screen p-10">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-black">
          Low Stock
        </h1>

        <p className="text-black text-lg mt-2">
          Bottles needing reorder
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {lowStockItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#f4e4c8]/95 rounded-[28px] border border-red-400 shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-black">
                  {item.name}
                </h2>

                <p className="text-black mt-2">
                  {item.category}
                </p>

                <p className="text-black text-sm mt-1">
                  {item.location}
                </p>
              </div>

              <div className="bg-red-200 text-red-900 px-4 py-2 rounded-xl text-sm font-semibold">
                Low Stock
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-black">
                Remaining Bottles
              </p>

              <p className="text-5xl font-bold text-black mt-1">
                {item.stock}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}