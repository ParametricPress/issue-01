
# mkdir public/about
# mkdir public/articles
# mkdir public/articles/bacone-school
# mkdir public/articles/bias-in-machine-learning
# mkdir public/articles/unraveling-the-jpeg
# mkdir public/articles/housing-data-science
# mkdir public/articles/particle-physics

npm link parametric-components parametric-styles
idyll build
cp -r build/* public/

cd pages/about
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../../public/about
cd ../..

cd ../bacone-school
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/bacone-school

cd ../bias-in-ml
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/bias-in-machine-learning

cd ../housing-data-science
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/housing-data-science

cd ../decoding-the-jpeg
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/unraveling-the-jpeg

cd ../particle-physics
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/particle-physics


cd ../se-asia-bombs
npm link parametric-components parametric-styles
idyll build
cp -r build/* ../issue-01/public/articles/anything-that-flies-anything-that-moves


cd ../issue-01/public
now
now alias issue-01-preview.parametric.press