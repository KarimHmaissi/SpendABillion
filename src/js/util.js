const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const buildArray = () => {
  const arrayStructure = [];
  const amountOfRows = 10000;
  const numberOfBoxesInRow = 10;
  const data = [];

  // build 2d array
  for (let i = 0; i < amountOfRows; i += 1) {
    const newRow = [];

    for (let x = 0; x < numberOfBoxesInRow; x += 1) {
      newRow.push(false);
    }
    arrayStructure.push(newRow);
  }

  // add markup to map
  for (let i = 0; i < arrayStructure.length; i += 1) {
    let number = ((i + 1) * 100000);
    const currentRow = arrayStructure[i];

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
