# atCorderのディレクトリとファイル作成用のシェルスクリプト

jst_year_month=$(date '+%Y-%m')
jst_month_day=$(date '+%m-%d')

cd $jst_year_month && mkdir $jst_month_day && cd $jst_month_day

echo -n 回答する問題のタイトルを入力してください:
read question
mkdir $question
cd $question
touch answer.ts