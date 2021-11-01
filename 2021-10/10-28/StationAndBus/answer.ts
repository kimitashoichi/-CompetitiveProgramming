// 問題URL
// https://atcoder.jp/contests/abc158/tasks/abc158_a

function stationAndBus(S: string) {
  const A_PATTERN = 'AAA';
  const B_PATTERN = 'BBB';
  if (S === A_PATTERN || S === B_PATTERN) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}

stationAndBus('ABA'); // Yes
stationAndBus('BBA'); // Yes
stationAndBus('BBB'); // No