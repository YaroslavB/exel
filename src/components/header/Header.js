import {ExelComponent} from '@core/ExelComponent';

export class Header extends ExelComponent {
  static className ='exel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    })
  }

  toHtml() {
    return '  <input type="text" class="input" value="New table">\n' +
        '            <div>\n' +
        '                <div class="button">\n' +
        '                    <i class="material-icons">delete</i>\n' +
        '                </div>\n' +
        '                <div class="button">\n' +
        '                    <i class="material-icons">exit_to_app</i>\n' +
        '                </div>\n' +
        '            </div>';
  }
}
