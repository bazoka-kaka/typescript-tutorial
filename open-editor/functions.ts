function add(a: number, b: number): number {
  return a + b;
}

export default add;

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data fetched from ${url}`);

export const introduce = (salutation: string, ...names: string[]): string =>
  `${salutation} ${names.join(" ")}`;

export const getName = (first: string, last: string): string =>
  `${first} ${last}`;
