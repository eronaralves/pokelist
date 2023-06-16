
export function formatterNumberPokedex(numberPokedex: number){
  const numberPorkedexAjusted = String(numberPokedex).padStart(3, '0')

  return numberPorkedexAjusted;
};