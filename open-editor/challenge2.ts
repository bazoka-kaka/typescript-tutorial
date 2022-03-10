function myForEach<T>(items: T[], foo: (v: T) => void): void {
  items.reduce((acc, curr) => {
    foo(curr);
    return undefined;
  }, undefined);
}

const arr = [1, 2, 3, 4];
myForEach(arr, (v: number) => console.log(v));

function myFilter<T>(items: T[], foo: (v: T) => boolean): T[] {
  return items.reduce(
    (acc: T[], val: T) => (foo(val) ? [...acc, val] : acc),
    []
  );
}

console.log(
  myFilter<number>([1, 2, 3, 4, 5, 6, 7, 8], (v: number) => v % 2 == 0)
);

function myMap<T, K>(items: T[], foo: (v: T) => K): K[] {
  return items.reduce((acc: K[], val: T) => [...acc, foo(val)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5], (v) => (v * 10).toString()));
