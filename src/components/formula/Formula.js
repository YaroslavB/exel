import {ExelComponent} from '@core/ExelComponent';
import {$} from '@core/Dom';

export class Formula extends ExelComponent {
  static className ='exel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,

    })
  }

  toHtml() {
    return ' <div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '<div id="formula" class="input" contenteditable="true" spellcheck="false"></div>';
  }

  init() {
    super.init()
    this.$formula = this.$root.find('#formula')
    this.$on('table:select', $cell =>{
      this.$formula.text($cell.text())
    })

    this.$on('table:input', $cell =>{
      this.$formula.text($cell.text())
    })
  }

  onInput(event) {
    this.$observ('formula:input', $(event.target).text())
  }

  onKeydown(event) {
    const keys =['Enter', 'Tab']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$observ('formula:done')
    }
  }
}
