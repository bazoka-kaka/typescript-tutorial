function pluck<Datatype, Keytype extends keyof Datatype>(
  items: Datatype[],
  key: Keytype
): Datatype[Keytype][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mimi", age: 12 },
  { name: "Little Guy", age: 13 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

//Event map
interface BaseEvent {
  time: number;
  user: string;
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
  productID: "foo",
  user: "Baz",
  quantity: 1,
  time: 10,
});
sendEvent("checkout", { time: 20, user: "Bob" });
