const findLongestVowel = (str) => {
  const count = str.match(/[aeiou]/g);
  return count === null ? 0 : count.length;
};

const findLongestWord = (sentence) => {
  const words = sentence
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ");
  let longestWord = words[0];
  let longestWordVoWels = findLongestVowel(longestWord);

  for (let i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    } else if (
      longestWord.length === words[i].length &&
      longestWordVoWels < findLongestVowel(words[i])
    ) {
      longestWord = words[i];
      // if length and vowel count is equal... then the previous word wins!
    }
  }
  return longestWord;
};

// Test alternatives
test1 = "me you they"; // they
test2 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)"; // experience

test3 = "good bad evil"; // good //Same length and vowers -> previous one wins!

let longestWord = findLongestWord(test3);
console.log(longestWord);
