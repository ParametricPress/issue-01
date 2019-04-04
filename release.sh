
# mkdir public
# mkdir public/articles
# mkdir public/articles/bacone-school
# mkdir public/articles/bias-in-machine-learning
# mkdir public/articles/deconstructing-the-jpeg
# mkdir public/articles/housing-data-science
# mkdir public/articles/particle-physics

npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* public/

cd ../bacone-school
npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* ../issue-01/public/articles/bacone-school

cd ../bias-in-ml
npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* ../issue-01/public/articles/bias-in-machine-learning

cd ../housing-data-science
npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* ../issue-01/public/articles/housing-data-science

cd ../decoding-the-jpeg
npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* ../issue-01/public/articles/deconstructing-the-jpeg

cd ../particle-physics
npm link parametric-components parametric-styles
# npm i parametric-components@latest parametric-styles@latest --save
rm .idyll/browserify*
idyll build
cp -r build/* ../issue-01/public/articles/particle-physics

cd ../issue-01/public
now
