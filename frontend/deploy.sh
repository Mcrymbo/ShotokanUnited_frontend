echo "switching to master branch"
git checkout master

echo "building app...."
npm run build

echo "deploying files to the server"
scp -r dist/* croco@137.184.75.25:/var/www/137.184.75.25/

echo "done"
