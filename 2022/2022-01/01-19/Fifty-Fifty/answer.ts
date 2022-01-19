// 問題URL
// https://atcoder.jp/contests/abc132/tasks/abc132_a

function fiftyFifty(S: string) {
  const strArray = S.split('');
  let count = {};

  strArray.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  })

  const objCount = Object.keys(count);
  if (objCount.length === 2) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

fiftyFifty('ASSA'); // Yes
fiftyFifty('STOP'); // No
fiftyFifty('FFEE'); // Yes
fiftyFifty('FREE'); // No