// Gauß needs help! (Sums of a lot of numbers).
function f(n) {
    if (typeof n !== "number" || n % 1 !== 0 || n <= 0) {
        return false;
    }
    var s = 0;
    for (var i = 0; i <= n; i++) {
        s = s + i;
    }
    return s;
};

// better way

function f(n) {
    if (parseInt(n) === n && n > 0) {
        return n * (n + 1) / 2;
    } else {
        return false
    }
}
