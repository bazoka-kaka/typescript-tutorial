enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const englishLoadingState = {
  [LoadingState.beforeLoad]: "Before Load",
};

const isLoading = (state: LoadingState) => LoadingState.loading;

console.log(isLoading(LoadingState.loaded));

console.log(englishLoadingState[LoadingState.beforeLoad]);

//literal types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; ++i) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

console.log(rollDice(3));

function sendEvents(name: "addToCart", data: { productId: number }): void;
function sendEvents(name: "checkout", data: { cartCount: number }): void;
function sendEvents(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvents("addToCart", { productId: 123 });
