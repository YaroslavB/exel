import {ExelComponent} from '@core/ExelComponent';

export class Formula extends ExelComponent {
  static className ='exel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,

    })
  }

  toHtml() {
    return ' <div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '<div class="input" contenteditable="true" spellcheck="false"></div>';
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    this.observer.dispatch('test', text)
  }
}
