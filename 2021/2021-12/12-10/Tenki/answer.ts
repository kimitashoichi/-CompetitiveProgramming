// 問題URL
// https://atcoder.jp/contests/abc139/tasks/abc139_a

function tenki(S: string, T: string) {
  const predict = S.split('');
  const real = T.split('');
  let ans = 0;
  const hitWeathers = predict.filter((weather, index) => 
    weather === real[index]
  )

  console.log(hitWeathers.length);
}

tenki('CSS', 'CSR'); // 2
tenki('SSR', 'SSR'); // 3
tenki('RRR', 'SSS'); // 0