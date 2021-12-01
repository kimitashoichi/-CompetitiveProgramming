// 問題URL
// https://atcoder.jp/contests/abc170/tasks/abc170_a

function fiveVariables(params: number[]) {
  const searchTargetNumber = (numbers: number[]) => {
    return numbers.indexOf(0)
  };

  console.log(searchTargetNumber(params) + 1);
}

fiveVariables([0, 2, 3, 4, 5]) // 1
fiveVariables([1, 2, 0, 4, 5]) // 3