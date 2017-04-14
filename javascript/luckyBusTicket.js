// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.
//
// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(

function isLucky(ticket) {
var ticket2 = parseInt(ticket)
 tt= ticket.split("")
  if (  Number.isInteger(ticket2) && ticket.length == 6) {
    var total1 = 0
      for ( var x = 0; x < 3; x++){
          total1 += parseInt(tt[x])
      }
     var total2 = 0
      for ( var y = 3; y < 6; y++){
          total2 += parseInt(tt[y])
      }
    if (total1 == total2){
      return true
     } else{ return false}
  } else {
    return false
 }
}
