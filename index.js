//Declaring a function isPalindrome and giving it a parameter 'word'

function isPalindrome(word) {

  // iterate from the beginning to the middle

  for (let l = 0; l < word.length / 2; l++) {

    // check each letter to the correponding letter from the end

    const k = word.length - 1 - l;

    // Return false if any letter don't match

    if (word[l] !== word[k]) return false;
  }

  // return true
  return true;
}
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
