import {Hello} from './helloModule';
import {Word} from './wordModule';

Hello.say();

let word = new Word();
word.setWord('ES6');
console.log(word.getWord());
