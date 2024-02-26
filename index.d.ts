import { App } from "vue"

declare const useResize: {
  install: (app:App) => void
  (el: HTMLElement, callback: Function): void
}