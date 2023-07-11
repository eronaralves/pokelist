
export function formatterNumberPokedex(numberPokedex: number){
  const numberPorkedex = String(numberPokedex).padStart(3, '0')

  return numberPorkedex;
};

export function formatterWeight(weight?: number){
  const weightInKG = String(weight).padEnd(4, '0')
  const numberWeight = Number(weightInKG) / 1000

  return numberWeight;
};

export function formatterHeight(height?: number){
  const numberWeight = height && height / 10

  return numberWeight;
};