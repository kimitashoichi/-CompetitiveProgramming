// 問題URL
// https://atcoder.jp/contests/abc141/tasks/abc141_a

function weatherPrediction(S: string) {
  const weather = ['Sunny', 'Cloudy', 'Rainy'];
  const index = weather.indexOf(S);
  const ansIndex = index === 2 ? 0 : index + 1;
  console.log(weather[ansIndex]);
}

weatherPrediction('Sunny'); // Cloudy
weatherPrediction('Rainy'); // Sunny