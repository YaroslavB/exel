import {$} from '@core/Dom';
import {Observer} from '@core/Observer';

export class Exel {
  constructor(selector, options) {
    this.$el=$(selector)
    this.components = options.components || []
    this.observer = new Observer()
  }

  getRoot() {
    const $root = $.create('div', 'exel')
    const componentOptions = {
      observer: this.observer,
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions )
      $el.html(component.toHtml())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.components.forEach(component => component.destroy())
  }
}
