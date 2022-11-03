const throttle = (cb, delay) => {
    let last =  0
    return (...arg) => {
        let now = new Date().getTime();
        if(now - last === delay) return 0
        last = now
        return cb(...arg)
    }
}