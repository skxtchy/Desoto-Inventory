'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { ArrowLeft, Camera } from 'lucide-react';

export default function ScanPage() {
  const [scanResult, setScanResult] = useState('');
  const [inventory, setInventory] = useState<any[]>([]);
  const [matchedBottle, setMatchedBottle] = useState<any>(null);

  useEffect(() => {
    const savedInventory = localStorage.getItem('barInventory');

    if (savedInventory) {
      setInventory(JSON.parse(savedInventory));
    }
  }, []);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: {
          width: 280,
          height: 180,
        },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);

        const match = inventory.find(
          (item) => item.barcode === decodedText
        );

        setMatchedBottle(match || null);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [inventory]);

  return (
    <div className="min-h-screen p-6 space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-5xl font-black text-black">
            Barcode Scanner
          </h1>

          <p className="text-black text-lg mt-2">
            Live bottle barcode scanning
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 bg-[#b8833d] text-black px-5 py-3 rounded-2xl font-bold border border-[#7a5737]"
        >
          <ArrowLeft size={18} />
          Dashboard
        </Link>

      </div>

      <div className="bg-[#2f241d] rounded-[40px] border border-[#8a643d] shadow-2xl overflow-hidden">

        <div className="bg-[#3b2d24] px-8 py-5 border-b border-[#8a643d] flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-black text-white">
              Camera Scanner
            </h2>

            <p className="text-[#d7b27a] mt-1">
              Point camera at barcode
            </p>
          </div>

          <Camera className="text-[#d7b27a]" size={36} />

        </div>

        <div className="p-8">

          <div
            id="reader"
            className="overflow-hidden rounded-[30px] border-4 border-[#8a643d]"
          />

          {scanResult && (
            <div className="mt-8 bg-[#efe2c7] rounded-[28px] border border-[#9b7447] p-5">

              <p className="text-black text-sm font-bold uppercase tracking-wider">
                Last Scan
              </p>

              <h2 className="text-2xl font-black text-black mt-2 break-all">
                {scanResult}
              </h2>

            </div>
          )}

          {matchedBottle && (
            <div className="mt-8 bg-[#f4e4c8] rounded-[30px] border border-[#9b7447] p-6 shadow-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="uppercase tracking-[0.2em] text-black/70 font-bold text-sm">
                    Bottle Found
                  </p>

                  <h2 className="text-4xl font-black text-black mt-3">
                    {matchedBottle.name}
                  </h2>

                  <p className="text-black text-lg mt-3">
                    {matchedBottle.location}
                  </p>
                </div>

                <div className="text-right">

                  <p className="text-black text-sm font-bold">
                    Current Stock
                  </p>

                  <h3 className="text-6xl font-black text-black mt-2">
                    {matchedBottle.stock}
                  </h3>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}