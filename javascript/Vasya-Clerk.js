// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine) {
  let smallBill = 0;
  let biggerBill = 0;
  let returnValue = null;
  peopleInLine.map((people, i) => {
    if (returnValue === "NO") return;
    if (Number(people) <= 25) {
      smallBill += 25;
      returnValue = "YES";
      return;
    }

    if (people === 50 && smallBill >= 25) {
      smallBill -= 25;
      biggerBill = +50;
      returnValue = "YES";
      return;
    }

    if (people === 100 && smallBill + biggerBill >= 75) {
      if (biggerBill === 50) {
        biggerBill -= 50;
        smallBill -= 25;
      } else {
        smallBill -= 75;
      }
      returnValue = "YES";
      return;
    }
    returnValue = "NO";
  });
  return returnValue;
}

tickets([
  25,
  25,
  25,
  100,
  25,
  50,
  25,
  100,
  25,
  25,
  25,
  100,
  25,
  25,
  50,
  100,
  25,
  100,
  50
]);
