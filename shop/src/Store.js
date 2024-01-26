import { createStore } from "state-pool";

export const store = createStore();

const Store = {
  Header: null,
};

const keys = Object.keys(Store);

keys.map((key) => {
  store.setState(key, Store[key]);
});
