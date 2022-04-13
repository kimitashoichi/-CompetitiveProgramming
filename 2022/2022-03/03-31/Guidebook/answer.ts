// 問題URL
// https://atcoder.jp/contests/abc128/tasks/abc128_b

interface List {
  cityName: string;
  score: number;
};

// Obj配列からcityNameプロパティの値を全て抽出し、配列化
// 作り出した配列の重複を削除

// 削除した配列の各値を使用して、引数のlistsからObj配列を作成
// その後score順に並び替える
// 並び替えた後の角配列を辞書順になるように結合
// 元の引数のと比較して、合致したもののndex番号+1を出力する

function Guidebook (N: number, lists: List[]) {
  const original = [...lists];
  const cityNames = lists.map((value) => {
    return value.cityName;
  });
  cityNames.sort(sorted);
  // 辞書順・重複なしのcityNameのみの配列
  const cityNameLists = Array.from(new Set(cityNames));

  let targetObj = {};
  for (let i = 0; i < lists.length; i++) {
    let objCityName = lists[i].cityName;
    console.log(objCityName);

    for (let k = 0; k < cityNameLists.length; k++) {
      if (cityNameLists[k] === objCityName && Object.keys(cityNameLists[k])) {
        targetObj[cityNameLists[k]] = lists[i];
      }
    }
  }
  console.log(targetObj);

  const arraySplit = (cityName: string, lists: List[]) => {
    return lists.filter((value) => {
      cityName === value.cityName;
    })
  }
}

// 参考URL：https://uxmilk.jp/46945
function sorted (a, b) {
  const cityNameA = a;
  const cityNameB = b;

  let comparison = 0;
  if (cityNameA > cityNameB) {
    comparison = 1;
  } else if (cityNameA < cityNameB) {
    comparison = -1;
  }

  return comparison;
}

function dicSort (a, b) {
  return a - b;
}

const q1: List[] = [{
    cityName: 'khabarovsk',
    score: 20
  }, {
    cityName: 'moscow',
    score: 10
  }, {
    cityName: 'kazan',
    score: 50
  }, {
    cityName: 'kazan',
    score: 35
  }, {
    cityName: 'moscow',
    score: 60
  }, {
    cityName: 'khabarovsk',
    score: 40
  }
];

Guidebook(6, q1);