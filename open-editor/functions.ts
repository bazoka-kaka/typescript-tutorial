function add(a: number, b: number): number {
  return a + b;
}

export default add;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

//void function
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

//promise function
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//rest parameters
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user.first} ${user.last}`;
}
