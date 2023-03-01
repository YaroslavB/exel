import {ExelComponent} from '@core/ExelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/Dom';

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
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resize"]')
      const coordinates = $parent.getCords()

      // eslint-disable-next-line no-unused-vars
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e =>{
        const delta = e.pageX - coordinates.right
        const value = coordinates.width + delta
        $parent.$el.style.width = value + 'px'
        cells.forEach(el => el.style.width = value + 'px')
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
