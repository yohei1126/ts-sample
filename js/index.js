(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './helloModule'], factory);
    }
})(function (require, exports) {
    "use strict";
    var helloModule_1 = require('./helloModule');
    helloModule_1.Hello.say();
    var word = new helloModule_1.Word();
    word.setWord('ES6');
    console.log(word.getWord());
});
