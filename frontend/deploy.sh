echo "switching to master branch"
git checkout master

echo "building app...."
npm run build

echo "deploying files to the server"
scp -r dist/* croco@157.245.98.236:/var/www/157.245.98.236/

echo "done"
