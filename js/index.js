(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './helloModule', './wordModule'], factory);
    }
})(function (require, exports) {
    "use strict";
    var helloModule_1 = require('./helloModule');
    var wordModule_1 = require('./wordModule');
    helloModule_1.Hello.say();
    var word = new wordModule_1.Word();
    word.setWord('ES6');
    console.log(word.getWord());
});
