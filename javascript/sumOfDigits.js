const digitalRoot = (n) => {
    if(n < 10 ) { 
        return n
    }
        const nextNumber = n.toString().split('')
        .map((a => Number(a)))
        .reduce((sum, num) => Number(sum) + Number(num) )
        return digitalRoot(nextNumber)
  };

  console.log(digitalRoot(35))