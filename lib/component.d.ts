import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    QfButton: typeof components.Button;
  }
}
export {};
