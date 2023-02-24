// charset codes from  firs and last A-Z
const CODES ={
  A: 65,
  Z: 90,
}


// eslint-disable-next-line no-unused-vars
function toCell() {
  return `<div class="cell" contenteditable></div>`
}
// generate  new column
function toColumn(col) {
  return `<div class="column" data-type="resize">
              ${col}
              <div class="col-resize" data-resize="col"></div>
          </div>`
}

function createRow(index, content) {
  const resizer = index ? `<div class="row-resize" data-resize="row"></div>`:''
  return `<div class="row" >
                <div class="row-info">
                    ${index ? index:''}
                    ${resizer}
                    </div>
                <div class="row-data">${content}</div>
          </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}


export function createTable(rowsCount = 14) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows =[]
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
      .trim()
  rows.push(createRow(null, cols))
  for (let i = 0; i<rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i+1, cells))
  }
  return rows.join('')
}
