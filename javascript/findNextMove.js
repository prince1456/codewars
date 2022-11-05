/**
Coding Challenge
---

Write a function that takes in a point and determines all possible moves from that point in the matrix. You can move in the vertical or horizontal direction (no diagonals). 

Notes:
  - A points is an array with [x, y] values.
  - The grid values are:
      0 = open space that you can move to
      1 = wall that you cannot move to

  - The grid is a 2D array: [row1, row2]
  
  - To get an element at [x, y] use grid[y][x] 


Examples:
  possibleMoves(2, 0)
    => [ [1,0], [3,0] ]
  possibleMoves(2, 2)
    => [ [1,2], [2,3], [3,2] ]
  possibleMoves(5, 4)
    => [ [5,3] ]
**/
const grid = [
    [0,0,0,0,1,0],
    [1,1,1,0,0,0],
    [0,0,0,0,1,0],
    [0,1,0,1,0,0],
    [0,1,1,0,1,0]
]

return [[2, 2], [3, 1 ]]
y = 2
x= 3
  function possibleMoves(x, y) {
    const newGrid = grid.slice(startPoint, endPoint)
    const result = []
    console.log(newGrid)
    newGrid.forEach((list) => {
        if(i % 2 !== 0 ) {

        }
    })
    return []
  }


  possibleMoves(2,4)