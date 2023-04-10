import {DomListener} from '@core/DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options ={}) {
    super($root, options.listeners)
    this.observer = options.observer
    this.prepare()
  }

  prepare() {}

  toHtml() {
    return '';
  }
  init() {
    this.initDomListeners()
  }
  destroy() {
    this.removeDomListeners()
  }
}
