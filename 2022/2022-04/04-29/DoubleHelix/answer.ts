// https://atcoder.jp/contests/abc122/tasks/abc122_a

function doubleHelix (b: string) {
  if (b === 'A') {
    console.log('T');
  } else if (b === 'C') {
    console.log('G');
  } else if (b === 'G') {
    console.log('C');
  } else {
    console.log('T');
  }
}

doubleHelix('A'); // T
doubleHelix('G'); // C

