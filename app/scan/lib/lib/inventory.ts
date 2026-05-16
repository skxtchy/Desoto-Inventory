import { supabase } from './supabase';

export async function fetchInventory() {
  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .order('name');

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function updateBottleStock(
  id: number,
  stock: number
) {
  const { error } = await supabase
    .from('inventory')
    .update({
      stock,
      lowStock: stock <= 2,
    })
    .eq('id', id);

  if (error) {
    console.error(error);
  }
}

export async function addBottle(bottle: any) {
  const { error } = await supabase
    .from('inventory')
    .insert([bottle]);

  if (error) {
    console.error(error);
  }
}