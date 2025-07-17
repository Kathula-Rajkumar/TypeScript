enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed : Direction){
   //can be empty inside
}


doSomething(Direction.Left)
doSomething(Direction.Right)

console.log(Direction.Left) // outputs 2
console.log(Direction.Right) // outputs 3


if incase
enum Direction{
  Up = up,
  Down = down ,
  Left = left,
  Right = right
}

function doSomething(keyPressed : Direction){
  
}

doSomething(Direction.Right)
doSomething(Direction.Left)

console.log(Direction.Right)// outputs right
console.log(Direction.Left)// outputs left
