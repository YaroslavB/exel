import {DomListener} from '@core/DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options ={}) {
    super($root, options.listeners)
    this.name = options.name || '';
    this.observer = options.observer
    this.unsubScribers = []

    this.prepare()
  }

  prepare() {}

  toHtml() {
    return '';
  }

  $on(event, fn) {
    const unsub = this.observer.subscribe(event, fn)
    this.unsubScribers.push(unsub)
  }

  $observ(event, ...args) {
    this.observer.dispatch(event, ...args)
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
    this.unsubScribers.forEach(unsub => unsub())
  }
}
