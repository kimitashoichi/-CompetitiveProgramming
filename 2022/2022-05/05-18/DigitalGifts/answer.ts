// https://atcoder.jp/contests/abc119/tasks/abc119_b

interface list {
  x: number,
  u: string
}

function digitalGifts (N: number, lists: list[]) {
  let total = 0;
  const BTC_RATE = 380000;

  for (let i = 0; i < N; i++) {
    let list = lists[i];
    if (list.u === 'BTC') {
      total += list.x * BTC_RATE;
    } else {
      total += list.x;
    }
  }

  console.log(total);
}


const q1: list[] = [
  {x: 10000,  u: 'JPY'},
  {x: 0.10000000,  u: 'BTC'},
];

const q2: list[] = [
  {x: 100000000,  u: 'JPY'},
  {x: 100.00000000,  u: 'BTC'},
  {x: 0.00000001,  u: 'BTC'},
]

digitalGifts(2, q1); // 48000.0
digitalGifts(3, q2); // 138000000.0038