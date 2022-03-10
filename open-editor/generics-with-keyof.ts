function pluck<Datatype, Keytype extends keyof Datatype>(
  items: Datatype[],
  key: Keytype
): Datatype[Keytype][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Amanda", age: 20 },
  { name: "Bruce", age: 10 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
  user: string;
  time: number;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  user: "Yehezkel",
  time: 10,
  quantity: 1,
  productID: "s01",
});
