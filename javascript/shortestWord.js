function findShort(sentence){
   return sentence.split(' ').sort((a, b) => a.length - b.length)[0].length
}   

const shortWord = findShort("bitcoin take over the world maybe who knows perhaps turns out random test cases are easier than writing out basic ones")
console.log(shortWord)