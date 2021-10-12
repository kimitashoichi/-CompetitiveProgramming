// 問題URL
// https://atcoder.jp/contests/abc166/tasks/abc166_b

interface Treat {
  people: number;
  possession: number[];
}

function trickOrTreat(N: number, K: number, children: Treat[]) {
  const childs = new Array<number>(N).fill(0);
  for (let i = 0; i < K; i++) {
    let child = children[i];
    for (let j = 0; j < child.possession.length; j++) {
      childs[child.possession[j] - 1] += 1;
    }
  }

  const answer = childs.filter((val: number) => val === 0);
  console.log(answer.length);
}

const one: Treat[] = [
  {
    people: 2,
    possession: [1, 3]
  },
  {
    people: 1,
    possession: [3]
  }
]

const two: Treat[] = [
  {
    people: 1,
    possession: [3]
  },
  {
    people: 1,
    possession: [3]
  },
  {
    people: 1,
    possession: [3]
  },
]

trickOrTreat(3, 2, one); // 1
trickOrTreat(3, 3, two); // 2


// 住んでいる子どもの数の要素を持つから配列を作成
// お菓子を所持している子供のインデックス番号と最初に作成した配列のインデックス番号が一致する要素に１を足す
// これをお菓子の種類だけ繰り返す
// 配列の値が０の要素をカウントして出力