export function StandardRoll() {
  return Math.ceil(Math.random() * 99);
}

export function OtherRolls(userRoll) {
  const rolls = [];

  while (rolls.length < 7) {
    let extraction = Math.ceil(Math.random() * 99);
    if (!rolls.includes(extraction) & extraction != userRoll) {
      rolls.push(extraction);
    }

  }
  return rolls;
}
