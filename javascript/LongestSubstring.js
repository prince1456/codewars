// link: https://www.codewars.com/kata/longest-alphabetical-substring/train/javascript
// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

function longest(str) {
    if(str.length === 1) return str
  const alphabets = [...Array(26)]
    .map(_ => String.fromCharCode(i++), (i = 97))
  let longString = ''
  let subSting = ''
  for (let x = 0; x < str.length; x++) {
      let char = str.charAt(x);
      const nextChar = str.charAt(x + 1);
      let charIndex = alphabets.findIndex(alphabet =>  alphabet === char)
      let nextCharIndex = alphabets.findIndex(alphabet =>  alphabet === nextChar)
      console.log(nextCharIndex, charIndex)

    if(nextCharIndex >= charIndex){
        console.log(subSting, longString)
        // if(!subSting.length) {
        //     subSting = subSting + char
        // }
        console.log(subSting, longString)
        subSting = subSting + nextChar
    } else {
        if(!subSting.length) {
            subSting = subSting + char
        }
        console.log(subSting.length, longString)
        longString = subSting.length > longString.length ? subSting : longString
        subSting = ''
    }
  }
  return longString;
}
console.log(longest("zyba"));
