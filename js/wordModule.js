(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Word = (function () {
        function Word() {
        }
        Word.prototype.setWord = function (word) {
            this.word = word;
        };
        Word.prototype.getWord = function () {
            return this.word;
        };
        return Word;
    }());
    exports.Word = Word;
});
