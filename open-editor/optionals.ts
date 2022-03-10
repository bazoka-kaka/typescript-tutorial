function printIngridients(
  quantity: string,
  ingridients: string,
  extra?: string
): void {
  console.log(`${quantity} ${ingridients} ${extra ? extra : ""}`);
}

printIngridients("Hello", "World");
printIngridients("Hello", "World", "to Me");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getHardEmail(user: User): string {
  if (user.info) {
    return user.info!.email!;
  }
  return "";
}

function getEmail(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallbacks(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
