// 問題URL
// https://atcoder.jp/contests/abc193/tasks/abc193_b

interface StoreInfo {
  minute: number
  price: number
  stock: number
}

function playSnuke(N: number, info: StoreInfo[]) {
  let availableStorePrice: number[] = [];

  for(let i = 0; i < info.length - 1; i++) {
    if (info[i].stock - info[i].minute <= 0) {
      console.log(-1);
      return;
    } else {
      availableStorePrice.push(info[i].price);
    }
  }

  availableStorePrice.sort(function asc(a ,b) {
    return a - b
  })

  console.log(availableStorePrice[0]);
}

const questionOne: StoreInfo[] = [
  {
    minute: 3,
    price: 9,
    stock: 5,
  },
  {
    minute: 4,
    price: 8,
    stock: 5
  },
  {
    minute: 5,
    price: 7,
    stock: 5
  }
]

playSnuke(3, questionOne);


const questionTwo: StoreInfo[] = [
  {
    minute: 5,
    price: 9,
    stock: 5,
  },
  {
    minute: 6,
    price: 8,
    stock: 5
  },
  {
    minute: 7,
    price: 7,
    stock: 5
  }
]

playSnuke(3, questionTwo);



// マシンが売り切れる分数は0.5からスタートして１づつ増えていく
// 与えられるのは店舗数、各店舗までの距離、各店舗での価格、各店舗での在庫数


// 最初の判定として買えるか買えないかを行う
// 在庫 - 距離が0以上であれば購入可能、そうでなければ購入不可能

// 購入可能だった場合、可能な店舗の価格を比較して一番安い金額を出力


// 1, 購入可能な店舗をインデックス番号で保存
// 1-2, 購入可能な店舗がなければ処理を終了させる
// 2, 購入可能な店舗があれば価格を比較して一番低い金額を出力