// 問題URL
// https://atcoder.jp/contests/abc203/tasks/abc203_b

function atCoderCondominium(N: number, K: number) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    let floor = i * 100;
    for (let j = 1; j <= K; j++) {
      let room = j
      let floorRoomNumber = floor + room;
      answer += floorRoomNumber;
    }
  }

  console.log(answer);
}

atCoderCondominium(1, 2) // 203
atCoderCondominium(3, 3) // 1818
