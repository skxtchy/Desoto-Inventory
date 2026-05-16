export const inventory = [
  {
    id: 1,
    name: 'Fireball',
    category: 'Whiskey',
    size: '1L',
    location: 'Liquor Room',
    stock: 9,
    lowStock: false,
  },
  {
    id: 2,
    name: "Tito's Vodka",
    category: 'Vodka',
    size: '1L',
    location: 'Green Street',
    stock: 10,
    lowStock: false,
  },
  {
    id: 3,
    name: 'Patron Silver',
    category: 'Tequila',
    size: '1L',
    location: 'Banquets',
    stock: 4,
    lowStock: false,
  },
];> 1 | import { inventory } from '@/data/inventory';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  2 |
  3 | export default function ReportsPage() {
  4 |   const totalBottles = inventory.reduce(
Import map: aliased to relative './data/inventory' inside of [project]/
https://nextjs.org/docs/messages/module-not-found
    at <unknown> (./app/inventory/page.tsx:5:1)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
    at <unknown> (./app/low-stock/page.tsx:1:1)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
    at <unknown> (./app/reports/page.tsx:1:1)
    at <unknown> (https://nextjs.org/docs/messages/module-not-found)
Error: Command "npm run build" exited with 1