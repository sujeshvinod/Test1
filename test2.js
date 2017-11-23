var mixin = require("merge-descriptors");

function Emp() {
    this._id = 0;
    this._name = "";
}

Emp.prototype = Object.create(Object);

mixin(Emp.prototype, {
    getId: function() {
        return this._id;
    },
    setId: function(v) {
        this._id = v;
    },
    getName: function() {
        return this._name;
    },
    setName: function(v) {
        this._name = v;
    }
}, false);

module.exports.E1 = Emp;
module.exports.E2 = Emp;
module.exports.E3 = Emp;
module.exports.E4 = Emp;