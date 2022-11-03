
function multiplyTwo(n) {
    return n * 2
}

function subtractTwo(n) {
    return n - 2
}
function plusHundred(n) {
    return n +100
}

function compose (...functions) {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args)
    }
}

const calculate = compose(multiplyTwo, subtractTwo, plusHundred)

calculate(25)