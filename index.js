// code your solution here
// helpers.js
function superbowlWin(record) {
  // Iterate through each record in the array
  for (let i = 0; i < record.length; i++) {
    // Check if the result is "W" (Win)
    if (record[i].result === "W") {
      // Return the year if a win is found
      return record[i].year;
    }
  }
  // Return undefined if no win is found
  return undefined;
}


