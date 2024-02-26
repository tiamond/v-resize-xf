import type { App } from 'vue'

const useResize = (el: HTMLElement, callback: Function) => {
  const resize = new ResizeObserver((entries) => {
    callback(entries[0].contentRect)
  })
  resize.observe(el)
}

const install = (app: App) => {
  app.directive('resize', {
    mounted(el: HTMLElement, binding) {
      useResize(el, binding.value)
    }
  })
}

useResize.install = install

export default useResize