import { BUY_MILK } from "./milkTypes";

export function buyMilk(payload = 1) {
  return {
    type: BUY_MILK,
    payload: payload,
  };
}
