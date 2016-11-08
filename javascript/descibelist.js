// Write function describeList which tells if the list is empty or contains only one element or more.

function describeList(x) {
    if (x.length == 0) {
        return 'empty';
    } else if (x.length == 1) {
        return "singleton"
    } else {
        return "longer"
    }
}

//
// Test.assertEquals(describeList([]), "empty");
// Test.assertEquals(describeList([1]), "singleton");
// Test.assertEquals(describeList([1,2]), "longer");
// Test.assertEquals(describeList([]), "empty");
// Test.assertEquals(describeList([1.5]), "singleton");
// Test.assertEquals(describeList([1.5,2.5]), "longer");
