'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { inventory as inventoryData } from '@/data/inventory';

const categories = [
  'All',
  'Vodka',
  'Whiskey',
  'Bourbon',
  'Tequila',
  'Gin',
  'Rum',
  'Liqueur',
  'Scotch',
];

export default function InventoryPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [inventory, setInventory] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedInventory =
        localStorage.getItem('barInventory');

      if (savedInventory) {
        return JSON.parse(savedInventory);
      }
    }

    return inventoryData;
  });

  const [newBottle, setNewBottle] = useState({
    name: '',
    category: 'Vodka',
    location: 'Liquor Room',
    stock: 1,
  });

  useEffect(() => {
    localStorage.setItem(
      'barInventory',
      JSON.stringify(inventory)
    );
  }, [inventory]);

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, inventory]);

  const updateStock = (id: number, amount: number) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStock = Math.max(
            0,
            item.stock + amount
          );

          return {
            ...item,
            stock: newStock,
            lowStock: newStock <= 2,
          };
        }

        return item;
      })
    );
  };

  const addBottle = () => {
    if (!newBottle.name.trim()) return;

    const bottle = {
      id: Date.now(),
      name: newBottle.name,
      category: newBottle.category,
      location: newBottle.location,
      stock: Number(newBottle.stock),
      lowStock:
        Number(newBottle.stock) <= 2,
    };

    setInventory((prev) => [
      bottle,
      ...prev,
    ]);

    setNewBottle({
      name: '',
      category: 'Vodka',
      location: 'Liquor Room',
      stock: 1,
    });
  };

  return (
    <div className="min-h-screen p-6">

      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black">
          Inventory
        </h1>

        <p className="text-black mt-1 text-lg">
          Green Street • Generals • Courtyard • Banquets • Liquor Room
        </p>
      </div>

      <div className="bg-[#f4e4c8]/95 rounded-[22px] border border-[#9b7447] shadow-md p-4 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 mb-6">

          <input
            type="text"
            placeholder="Bottle Name"
            value={newBottle.name}
            onChange={(e) =>
              setNewBottle({
                ...newBottle,
                name: e.target.value,
              })
            }
            className="bg-[#efe2c7] border border-[#9b7447] rounded-xl px-4 py-3 text-black"
          />

          <select
            value={newBottle.category}
            onChange={(e) =>
              setNewBottle({
                ...newBottle,
                category: e.target.value,
              })
            }
            className="bg-[#efe2c7] border border-[#9b7447] rounded-xl px-4 py-3 text-black"
          >
            {categories
              .filter((c) => c !== 'All')
              .map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
          </select>

          <select
            value={newBottle.location}
            onChange={(e) =>
              setNewBottle({
                ...newBottle,
                location: e.target.value,
              })
            }
            className="bg-[#efe2c7] border border-[#9b7447] rounded-xl px-4 py-3 text-black"
          >
            <option>Green Street</option>
            <option>Generals</option>
            <option>Courtyard</option>
            <option>Banquets</option>
            <option>Liquor Room</option>
          </select>

          <input
            type="number"
            min="1"
            value={newBottle.stock}
            onChange={(e) =>
              setNewBottle({
                ...newBottle,
                stock: Number(e.target.value),
              })
            }
            className="bg-[#efe2c7] border border-[#9b7447] rounded-xl px-4 py-3 text-black"
          />

          <button
            onClick={addBottle}
            className="bg-[#b8833d] text-black px-5 py-3 rounded-xl font-semibold border border-[#7a5737]"
          >
            + Save Bottle
          </button>

        </div>

        <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">

          <div className="relative w-full xl:max-w-md">

            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
              size={18}
            />

            <input
              type="text"
              placeholder="Search liquor..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-[#efe2c7] border border-[#9b7447] rounded-xl py-3 pl-10 pr-4 text-black outline-none"
            />

          </div>

          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-3 py-2 rounded-xl text-sm font-semibold border ${
                  selectedCategory === category
                    ? 'bg-[#b8833d] border-[#7a5737]'
                    : 'bg-[#efe2c7] border-[#9b7447]'
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">

        {filteredInventory.map((item) => (
          <div
            key={item.id}
            className="bg-[#f4e4c8]/95 rounded-[18px] border border-[#9b7447] shadow-md p-3"
          >
            <div className="flex items-start justify-between gap-2">

              <div>
                <h2 className="text-sm font-bold text-black">
                  {item.name}
                </h2>

                <p className="text-xs text-black mt-1">
                  {item.category}
                </p>

                <p className="text-[11px] text-black mt-1">
                  {item.location}
                </p>
              </div>

              <div
                className={`px-2 py-1 rounded-lg text-[10px] font-semibold ${
                  item.lowStock
                    ? 'bg-red-200 text-red-900'
                    : 'bg-green-200 text-green-900'
                }`}
              >
                {item.lowStock ? 'Low' : 'OK'}
              </div>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <div>
                <p className="text-[10px] text-black">
                  Stock
                </p>

                <p className="text-2xl font-bold text-black">
                  {item.stock}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() =>
                    updateStock(item.id, -1)
                  }
                  className="w-8 h-8 rounded-lg bg-[#d7b27a] border border-[#8a643d] text-lg font-bold"
                >
                  -
                </button>

                <button
                  onClick={() =>
                    updateStock(item.id, 1)
                  }
                  className="w-8 h-8 rounded-lg bg-[#b8833d] border border-[#7a5737] text-lg font-bold"
                >
                  +
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}