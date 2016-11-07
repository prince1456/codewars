// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]


function filter_list(l) {
var myArray =[];
for (var i =0; i < l.length; i++){
 if ( typeof l[i] === 'number'){
 myArray.push(l[i]);
};
}
return myArray
  // Return a new array with the strings filtered out
}

filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// or
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }

// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
