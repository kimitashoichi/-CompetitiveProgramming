// 問題URL
// https://atcoder.jp/contests/abc170/tasks/abc170_b

function craneAndTurtle(X: number, Y: number) {
  const TURTLE = 4;
  const CRANE = 2;

  for (let i = 0; i <= X; i++) {
    let totalNumber = Y;
    let number0fTurtles = TURTLE * i;
    totalNumber -= number0fTurtles;
    if (totalNumber === 0) {
      console.log('Yes');
      return;
    }

    for (let j = 0; j <= X - i; j++) {
      let number0fCrane = CRANE * j;
      totalNumber -= number0fCrane;
      if (totalNumber === 0) {
        console.log('Yes');
        return;
      }
    }
  }

  console.log('No');
};


craneAndTurtle(3, 8); // Yes;
craneAndTurtle(2, 100); // No;
craneAndTurtle(1, 2) // Yes;