import {ExelComponent} from '@core/ExelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExelComponent {
  static className ='exel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    })
  }

  toHtml() {
    return createTable(120);
  }
  onClick() {
    console.log('click')
  }
  onMousedown(event) {
    console.log('mousedown', event.target)
  }
  onMousemove() {
    console.log('mousemove')
  }
  onMouseup() {
    console.log('mouseup')
  }
}
