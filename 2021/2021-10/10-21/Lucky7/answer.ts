// 問題URL
// https://atcoder.jp/contests/abc162/tasks/abc162_a

function luckySeven (N: number) {
  const splitNumbers = N.toString().split('');
  console.log(
    splitNumbers.includes('7') ? 'yes' : 'no' 
  )
}

luckySeven(117);
luckySeven(123);
luckySeven(777);