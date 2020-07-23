// Solution for - https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  // Variable to store total points
  let totalPoints = 0;
  // Looping through all games
  games.forEach((game) => {
    const x = game[0];
    const y = game[2];
    if (x > y) {
      // totalPoints = totalPoints + 3;
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  });
  // Returning total points
  return totalPoints;
}