import {ExelComponent} from '../../core/ExelComponent';

export class Formula extends ExelComponent {
  static className ='exel__formula'
  toHtml() {
    return ' <div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '            <div class="input" contenteditable="true" spellcheck="false"></div>';
  }
}
