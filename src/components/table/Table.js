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
      const type = $resizer.data.resize
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e =>{
        if (type === 'col') {
          const delta = e.pageX - coordinates.right
          const value = coordinates.width + delta
          $parent.css({width: value + 'px'})
          cells.forEach(el => el.style.width = value + 'px')
        } else if (type === 'row') {
          const delta = e.pageY - coordinates.bottom
          const value = coordinates.height + delta
          $parent.css({height: value + 'px'})
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
