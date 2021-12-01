// 問題URL
// https://atcoder.jp/contests/abc202/tasks/abc202_b

// 問題は数値を受け取るが、仕方なく文字列のお引数として回答することにする
function degreesOf180(S: string) {
  let reversedStrings = S.split("").reverse();
  
  for (let i = 0; i < reversedStrings.length; i++) {
    if (reversedStrings[i] === "6") {
      reversedStrings[i] = "9";
    } else if (reversedStrings[i] === "9") {
      reversedStrings[i] = "6";
    }
  }

  let answer = reversedStrings.join("");
  console.log(answer);
}

// 6が9に、9が6に変換される意外はreverseで対応できる

degreesOf180("0601889"); // 
degreesOf180("86910");
degreesOf180("01010")