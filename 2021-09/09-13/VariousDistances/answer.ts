// 問題URL
// https://atcoder.jp/contests/abc180/tasks/abc180_b

function variousDistances(N: number, x: number[]) {
  // マンハッタン距離
  const manhattanDistance = (distances: number[]) => {
    const totalDistance = distances.reduce((total: number, currentDistance: number): number => {
      return total + Math.abs(currentDistance);
    })
    return totalDistance;
  }

  // ユークリッド距離
  const euclideanDistance = (distances: number[]) => {
    const calc = (total: number, current: number) => {
      let currentDistance = current * current;
      return total + currentDistance
    };
    const total = distances.reduce(calc, 0);
    const sqrt = Math.sqrt(total);
    return Math.round(sqrt * 1000000000000000) / 1000000000000000;
  }

  // チェビシェフ距離
  const chebyshevDistance = (distances: number[]) => {
    const convertAbsoluteValues = distances.map((val: number) => {
      return Math.abs(val);
    })
    return Math.max(...convertAbsoluteValues);
  }

  console.log(manhattanDistance(x))
  console.log(euclideanDistance(x))
  console.log(chebyshevDistance(x));

}

variousDistances(2, [2, -1]);
variousDistances(10, [3, -1, -4, 1, -5, 9, 2, -6, 5, -3]);