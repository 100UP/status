mv docs dist
npm run generate
mv dist docs
echo "status.100up.org" > docs/CNAME
git add .
git commit
git push -u origin master
