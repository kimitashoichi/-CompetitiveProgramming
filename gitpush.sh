git add .
echo -n INPUT_STR: 
#入力を受付、その入力を「str」に代入
read str 

git commit -m $str
git push origin master

