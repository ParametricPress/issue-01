
cp ../parametric-styles/issue-01-theme.css static/
cp ../parametric-styles/issue-01-layout.css static/

npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master

# cd pages/about
# npm install --save parametric-components@latest parametric-styles@latest
# git add package.json package-lock.json
# git commit -m "update dependencies"
# git push origin master
# cd ../..

cd ../bacone-school
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master

cd ../bias-in-ml
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master

cd ../housing-data-science
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master

cd ../decoding-the-jpeg
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master

cd ../particle-physics
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master


cd ../se-asia-bombs
npm install --save parametric-components@latest parametric-styles@latest
git add package.json package-lock.json
git commit -m "update dependencies"
git push origin master
