import {ExelComponent} from '../../core/ExelComponent';

export class Table extends ExelComponent {
  static className ='exel__table'
  toHtml() {
    return '<h1>Table</h1>';
  }
}
