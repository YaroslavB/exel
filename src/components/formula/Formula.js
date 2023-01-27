import {ExelComponent} from '../../core/ExelComponent';

export class Formula extends ExelComponent {
  static className ='exel__formula'
  toHtml() {
    return '<h1>Formula</h1>';
  }
}
