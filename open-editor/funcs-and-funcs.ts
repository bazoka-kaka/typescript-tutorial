type MutationFunctions = (v: number) => number;

export function arrMutate(
  numbers: number[],
  mutate: MutationFunctions
): number[] {
  return numbers.map(mutate);
}

export type AdderFunction = (v: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
