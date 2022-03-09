type ThreeDCoordinate = [x: number, y: number, z: number];

function addThreeDCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(addThreeDCoordinate([1, 2, 3], [2, 3, 4]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1Getter, str1Setter] = simpleStringState("Hello");
console.log(str1Getter());
str1Setter("goodbye!");
console.log(str1Getter());
