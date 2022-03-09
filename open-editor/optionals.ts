function printIngridients(
  quantity: string,
  ingridient: string,
  extra?: string
) {
  console.log(`${quantity} ${ingridient} ${extra ? extra : ""}`);
}

printIngridients("1C", "Flour");
printIngridients("1C", "Sugar", "something else");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // if (callback) {
  //   callback();
  // }
  callback?.();
}
