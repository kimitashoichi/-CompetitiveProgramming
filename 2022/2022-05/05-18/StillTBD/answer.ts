// https://atcoder.jp/contests/abc119/tasks/abc119_a

function stillTBD (S: string) {
  // 本当はreplaceAllを使用する
  const convertDate = S.replace('/', '-').replace('/', '-');

  const comparisonDate = new Date('2019-04-30');
  const targetDate = new Date(convertDate);

  if (comparisonDate >= targetDate) {
    console.log('Heisei');
  } else {
    console.log('TBD');
  }
}

stillTBD('2019/04/30'); // Heisei
stillTBD('2019/11/01'); // TBD