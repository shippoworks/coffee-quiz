// index.js
import level01 from './levels/level01';
import level02 from './levels/level02';
import level03 from './levels/level03';
import level04 from './levels/level04';
import level05 from './levels/level05';

// レベル番号をキーにして配列やオブジェクトを格納する
const quizData = {
  1: level01,
  2: level02,
  3: level03,
  4: level04,
  5: level05
};

export default quizData;
