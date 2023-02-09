import {DomListener} from './DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options ={}) {
    super($root, options.listeners)
  }

  toHtml() {
    return '';
  }
  init() {
    this.initDomListeners()
  }
}
