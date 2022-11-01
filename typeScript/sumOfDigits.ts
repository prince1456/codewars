export const digitalRoot = (n:number) => {
    if(n < 10 ) { 
        return n
    }
        const nextNumber = n.toString().split('').map((a => Number(a)))
        .reduce((sum:number , num: number): number => Number(sum) + Number(num) )
       return digitalRoot(nextNumber)
    
  };

  export function digitalRoot2(n: number): number {
    return (n - 1) % 9 + 1;
  }
  
  console.log(digitalRoot(35))

