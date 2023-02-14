import {ExelComponent} from '@core/ExelComponent';

export class Toolbar extends ExelComponent {
  static className ='exel__toolbar'
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    })
  }


  toHtml() {
    return '  <div class="button">\n' +
        '                <i class="material-icons">format_align_left</i>\n' +
        '            </div>\n' +
        '            <div class="button">\n' +
        '                <i class="material-icons">format_align_center</i>\n' +
        '            </div>\n' +
        '            <div class="button">\n' +
        '                <i class="material-icons">format_align_right</i>\n' +
        '            </div>\n' +
        '            <div class="button">\n' +
        '                <i class="material-icons">format_bold</i>\n' +
        '            </div>\n' +
        '            <div class="button">\n' +
        '                <i class="material-icons">format_italic</i>\n' +
        '            </div>\n' +
        '            <div class="button">\n' +
        '                <i class="material-icons">format_underlined</i>\n' +
        '            </div>';
  }


  onClick(event) {
    console.log(event.target)
  }
}


