# atCorderのディレクトリとファイル作成用のシェルスクリプト

echo -n 現在の月を入力してください / 例：YYYY-MM:
read month
cd $month

echo -n 今日の日付を入力してください /例：MM-DD:
read day
mkdir $day
cd $day

echo -n 回答する問題のタイトルを入力してください:
read question
mkdir $question
cd $question
touch answer.ts