// https://atcoder.jp/contests/abc110/tasks/abc110_b


function oneDimensionalWorldsTale (N: number, M: number, X: number, Y: number, x: number[], y: number[]) {
  const newX = x.sort((a, b) => {return b - a});
  const newY = y.sort((a, b) => {return b - a});
  const newArr = [newX[0], newY[newY.length - 1]].sort((a, b) => {return b - a});
  let target: number[] = [];
  let flag = false;

  for (let i = newArr[1]; i <= newArr[0]; i++) {
    target.push(i);
  }
  
  for (let i = 0; i < target.length; i++) {
    const current = target[i];
    const first = X < current && current <= Y;
    const second = newX[0] < current;
    const third = current <= newY[newY.length - 1];
    if (first && second && third) {
      flag = true;
      break;
    }
  }

  console.log(flag ? 'No War': 'War');
}

oneDimensionalWorldsTale(3, 2, 10, 20, [8, 15, 13], [16, 22]); // No War
oneDimensionalWorldsTale(4, 2, -48, -1, [-20, -35, -91, -23], [-22, 66]); // War
oneDimensionalWorldsTale(5, 3, 6, 8, [-10, 3, 1, 5, -100], [100, 6, 14]); // War