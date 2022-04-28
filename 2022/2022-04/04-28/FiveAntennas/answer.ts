// 問題URL
// https://atcoder.jp/contests/abc123/tasks/abc123_a

function FiveAntennas (antennas: number[], t: number) {
  let flag = true;
  for (let i = 0; i < antennas.length; i++) {
    for (let k = 1; k < antennas.length; k++) {
      let distance = Math.abs(antennas[i] - antennas[k]);
      if (distance >= t) flag = false;
    }
  }

  console.log(flag ? 'Yay!' : ':(');
}

FiveAntennas([1,2,4,8,9], 15); // Yay!
FiveAntennas([15,18,26,35,36], 18); // :(