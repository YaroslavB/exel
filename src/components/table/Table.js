import {ExelComponent} from '@core/ExelComponent';

export class Table extends ExelComponent {
  static className ='exel__table'
  toHtml() {
    return '<div class="row">\n' +
        '                <div class="row-info"></div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="column">A</div>\n' +
        '                    <div class="column">B</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                </div>\n' +
        '            </div>' +
        '   <div class="row">\n' +
        '                <div class="row-info">1</div>\n' +
        '                <div class="row-data">\n' +
        // eslint-disable-next-line max-len
        '                    <div class="cell selected" contenteditable="true">1</div>\n' +
        // eslint-disable-next-line max-len
        '                    <div class="cell" contenteditable="true">2</div>\n' +
        // eslint-disable-next-line max-len
        '                    <div class="cell" contenteditable="true">3</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="row">\n' +
        '                <div class="row-info">2</div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="cell">1</div>\n' +
        '                    <div class="cell">2</div>\n' +
        '                    <div class="cell">3</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="row">\n' +
        '                <div class="row-info">3</div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="cell">1</div>\n' +
        '                    <div class="cell">2</div>\n' +
        '                    <div class="cell">3</div>\n' +
        '                </div>\n' +
        '            </div>';
  }
}
