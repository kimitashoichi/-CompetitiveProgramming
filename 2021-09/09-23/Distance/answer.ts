// 問題URL
// https://atcoder.jp/contests/abc174/tasks/abc174_b

function distance(N: number, D: number, distances: number[][]) {
  const TARGET_DISTANCE = D;
  let answer = 0;

  // 原点からの距離を計算
  const calcDistance = (point: number[]): number => {
    const pointOne = point[0] ** 2;
    const pointTwo = point[1] ** 2;
    return Math.sqrt(pointOne + pointTwo);
  }

  for (let i = 0; i < N; i++) {
    if (calcDistance(distances[i]) <= TARGET_DISTANCE) {
      answer++
    }
  }

  console.log(answer);
}

const one = [
  [0, 5],
  [-2, 4],
  [3, 4],
  [4, -4],
]

const two = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 1],
  [3, 2],
  [3, 3],
]

const three = [
  [14309, -32939],
  [-56855, 100340],
  [151364, 25430],
  [103789, -113141],
  [147404, -136977],
  [-37006, -30929],
  [188810, -49557],
  [13419, 70401],
  [-88280, 165170],
  [-196399, 137941],
  [-176527, -61904],
  [46659, 115261],
  [-153551, 114185],
  [98784, -6820],
  [94111, -86268],
  [-30401, 61477],
  [-55056, 7872],
  [5901, -163796],
  [138819, -185986],
  [-69848, -96669],
]

distance(4, 5, one); // 3
distance(12, 3, two); // 7
distance(20, 100000, three); // 6

