import { createInjector } from "typed-inject"

export class RariRunner {
  say() {
    const injector = createInjector()
    console.log("Hellus wordus!")
  }
}
