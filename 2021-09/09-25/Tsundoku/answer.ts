// 問題URL
// https://atcoder.jp/contests/abc172/tasks/abc172_c

function tsundoku(N: number, M: number, K: number, A: number[], B: number[]) {
  const MAX_TIME = 10 ** 10;
  const MAX_MINUTES = K;
  let booksOfA = A;
  let booksOfB = B;
  let booksCount = 0;
  let minutesCount = 0;

  // const getFirstValue = (booksA: number[], booksB: number[]) => {
  //   const valueOfA = booksA[0];
  //   const valueOfB = booksB[0];
  //   if (valueOfA < valueOfB) {
  //     booksA.shift();
  //     return valueOfA;
  //   } else {
  //     booksB.shift();
  //     return valueOfB;
  //   }
  // }

  const checkFirstValue = (booksA: number[], booksB: number[]) => {
    const valueOfA = booksA[0] ? booksA[0] : MAX_TIME;
    const valueOfB = booksB[0] ? booksB[0] : MAX_TIME;
    if (valueOfA < valueOfB) {
      booksA.shift();
      return valueOfA;
    } else {
      booksB.shift();
      return valueOfB;
    }
  }

  while (minutesCount <= MAX_MINUTES) {
    const pulsBooks = checkFirstValue(booksOfA, booksOfB);
    minutesCount += pulsBooks;
    if (minutesCount <= MAX_MINUTES) {
      booksCount++;
    }
  }
  console.log(booksCount);
}

tsundoku(3, 4, 240, [60, 90, 120], [80, 150, 80, 150]); // 3
tsundoku(3, 4, 730, [60, 90, 120], [80, 150, 80, 150]); // 7
tsundoku(5, 4, 1, [1000000000, 1000000000, 1000000000, 1000000000, 1000000000], [1000000000, 1000000000, 1000000000, 1000000000]) // 0

// 使用できる限界の分数 K
// N ⇨ Aに積まれている本の冊数
// M ⇨ Bに積まれている本の冊数
// それぞれの積読本に関してはインデックス番号が若い順からしか取り出せない


// 本の探し方
// A,Bに要素が存在しているか確認
// A,Bの先頭の要素で数値が小さい方を足した時にKより大きくならないかチェック
// 大きくならない場合、A,Bの先頭の要素で数値が小さい方を足す
// 足し合わせた要素は配列から削除する
// 本の冊数のカウントを増やす

// これをKの値を超えないように繰り返す