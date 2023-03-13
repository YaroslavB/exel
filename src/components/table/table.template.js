// charset codes from  firs and last A-Z
const CODES ={
  A: 65,
  Z: 90,
}


function toCell(row) {
  return function(_, col) {
    return `<div class="cell" 
             contenteditable
             data-col="${col}"
             data-row="${row}"
             data-type="cell"
             data-id="${row}:${col}"
             ></div>`
  }
}


// generate  new column
function toColumn(col, index) {
  return `<div class="column" data-type="resize" data-col="${index}">
              ${col}
              <div class="col-resize" data-resize="col"></div>
          </div>`
}

function createRow(index, content) {
  const resizer = index ? `<div class="row-resize" data-resize="row"></div>`:''
  return `<div class="row" data-type="resize">
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

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')
        .trim()
    rows.push(createRow(row+1, cells))
  }
  return rows.join('')
}
