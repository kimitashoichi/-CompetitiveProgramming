// https://atcoder.jp/contests/abc122/tasks/abc122_b

function ATCoder (S: string) {
  const ACGT = ['A', 'C', 'G', 'T'];
  const targetStrings = S.split('');
  let ansStirngs: string[] = [];

  for (let i = 0; i < targetStrings.length; i++) {
    if (ansStirngs.length !== 0) {
      if (ACGT.includes(targetStrings[i]) && ACGT.includes(targetStrings[i - 1])) {
        ansStirngs.push(targetStrings[i]);
      }
    } else {
      if (ACGT.includes(targetStrings[i])) {
        ansStirngs.push(targetStrings[i]);
      }
    }
  }
  
  console.log(ansStirngs.length);
}


ATCoder('ATCODER'); // 3
ATCoder('HATAGAYA'); // 5
ATCoder('SHINJUKU'); // 0