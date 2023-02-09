import {ExelComponent} from '@core/ExelComponent';

export class Formula extends ExelComponent {
  static className ='exel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  toHtml() {
    return ' <div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '<div class="input" contenteditable="true" spellcheck="false"></div>';
  }

  onInput(event) {
    console.log('block onInput', event);
  }
}
