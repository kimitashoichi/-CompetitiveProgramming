git add .
echo -n 日付を入力してください / YYYY-MM-DD:
#入力を受付、その入力を「str」に代入
read str

git commit -m $str
git push origin master
