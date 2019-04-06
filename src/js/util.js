const amountOfRows = 10000;
const numberOfBoxesInRow = 10;
const BILLION = 1000000000;

export const getBillion = () => BILLION;

export const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const camelToSpaces = x => x.replace(/([A-Z])/g, ' $1')
  .replace(/^./, str => str.toUpperCase());

export const updateDataArray = (dataArray, amountSpent, amountLeft) => {
  const updatedDataArray = dataArray;

  // find current position
  const offset = (BILLION - amountLeft) / 100000;

  // loop over data and update for amount
  const numberOfRows = amountSpent / 100000;

  for (let x = 0; x < numberOfRows + offset; x += 1) {
    for (let i = 0; i < updatedDataArray[x].length; i += 1) {
      updatedDataArray[x][i] = true;
    }
  }

  return updatedDataArray;
};

export const getDataArray = () => {
  const dataArray = [];

  // build 3d array
  for (let i = 0; i < amountOfRows; i += 1) {
    const newRow = [];

    for (let x = 0; x < numberOfBoxesInRow; x += 1) {
      newRow.push(false);
    }
    dataArray.push(newRow);
  }

  return dataArray;
};

export const getMarkupArray = (dataArray) => {
  const data = [];

  // add markup to map
  for (let i = 0; i < dataArray.length; i += 1) {
    let number = ((i + 1) * 100000);
    const currentRow = dataArray[i];

    number = numberWithCommas(number);
    const newRowString = [`<li><ul class="billions__inner"><span class="label">$${number}</span>`];

    for (let x = 0; x < currentRow.length; x += 1) {
      if (currentRow[x] === false) {
        newRowString.push('<li></li>');
      } else {
        newRowString.push('<li class="spent"></li>');
      }
    }

    newRowString.push('</ul></li>');

    const finishedRow = newRowString.join('');

    data.push(finishedRow);
  }

  return data;
};
