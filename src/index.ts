import {Hello, Word} from './helloModule';

Hello.say();

let word = new Word();
word.setWord('ES6');
console.log(word.getWord());
