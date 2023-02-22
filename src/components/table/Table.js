import {ExelComponent} from '@core/ExelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExelComponent {
  static className ='exel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHtml() {
    return createTable(120);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log(event.target.dataset.resize)
    }
  }
}
