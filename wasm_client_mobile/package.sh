rm -f -r deploy
mkdir deploy
cp -r pkg deploy/
cp index.html deploy
rm -f deploy.tar
tar -cf deploy.tar deploy
