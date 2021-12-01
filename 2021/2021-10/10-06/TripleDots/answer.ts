// 問題URL
// https://atcoder.jp/contests/abc168/tasks/abc168_b

function tripleDots(K: number, S: string) {
  const stringLength = S.length;
  const sliceOutput = (endNumber: number, value: string) => {
    return value.slice(0, endNumber) + '...';
  }

  if (K < stringLength) {
    console.log(sliceOutput(K, S));
  } else {
    console.log(S);
  }
}

tripleDots(7, 'nikoandsolstice'); // nikoand...
tripleDots(40, 'ferelibenterhominesidquodvoluntcredunt'); // nikoand...
