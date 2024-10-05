function ExtractNumber(number, array) {
  let extraction = array.indexOf(number);
  if (extraction > -1) {
    array.splice(extraction, 1);
  }

  return array;
}

export function CalculateWinProbability(roll) {
  let numbers = Array.from({ length: 99 }, (value, index) => index + 1);
  numbers = ExtractNumber(roll, numbers);
  let winProbability = 1;

  let i = 0;
  while (i < 7) {
    let baseProbability = 100 / numbers.length;

    let randomIndex = Math.floor(Math.random() * numbers.length);
    let extractedNumber = numbers[randomIndex];

    if (numbers.filter((n) => n < roll).length === 0) {
      winProbability = 0;
      break;
    }

    if (extractedNumber < roll) {
      numbers = ExtractNumber(extractedNumber, numbers);

      winProbability = winProbability * ((baseProbability * (1 + numbers.filter((n) => n < roll).length)) / 100);

      i++;
    }
  }

  console.log(roll, winProbability.toFixed(8));
  return winProbability;
}
