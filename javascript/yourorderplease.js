function order(words) {
    var arr = words.split(' ');
    arr.sort(function(a, b) {
        if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0]))
            return -1;
        else if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0]))
            return 1
        else
            return 0
    });
    return arr.join(' ');
}
