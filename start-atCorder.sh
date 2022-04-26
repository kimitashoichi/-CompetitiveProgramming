# atCorderのディレクトリとファイル作成用のシェルスクリプト

jst_year=$(date '+%Y')
jst_year_month=$(date '+%Y-%m')
jst_month_day=$(date '+%m-%d')

if [ -e $jst_year ]; then
    cd $jst_year
else
    mkdir $jst_year
    cd $jst_year
fi

if [ -e $jst_year_monthr ]; then
    cd $jst_year_month
else
    mkdir $jst_year_month
    cd $jst_year_month
fi

if [ -e $jst_month_day ]; then
    cd $jst_month_day
else
    mkdir $jst_month_day
    cd $jst_month_day
fi

echo -n 回答する問題のタイトルを入力してください:
read question
mkdir $question
cd $question
touch answer.ts