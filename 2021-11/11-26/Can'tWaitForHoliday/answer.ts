// 問題URL
// https://atcoder.jp/contests/abc146/tasks/abc146_a

function cantWaitForHoliday(S: string) {
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  let ans = 0;
  if (S === 'SUN') {
    ans = 7;
  } else {
    ans = days.indexOf(S);
  }

  console.log(ans);
}

cantWaitForHoliday('SAT'); // 1
cantWaitForHoliday('SUN'); // 7