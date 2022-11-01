export const digitalRoot = (n:number) => {
    if(n < 10 ) { 
        return n
    }
        const nextNumber = n.toString().split('').map((a => Number(a)))
        .reduce((sum:number , num: number): number => Number(sum) + Number(num) )
       return digitalRoot(nextNumber)
    
  };

  console.log(digitalRoot(35))


//   const digitalRoot = (n) => {
//     if(n < 10 ) { 
//         return n
//     }
//         const nextNumber = n.toString().split('')
//         .map((a => Number(a)))
//         .reduce((sum, num) => Number(sum) + Number(num) )
//         return digitalRoot(nextNumber)
//   };