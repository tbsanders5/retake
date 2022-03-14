function MyArrowFunctionThing() {
    this.name = 'Bob';

    this.getNameArrow = () => this.name;

    this.getNameStandard = (function() {
        return this.name;
    }).bind(this);
}

MyArrowFunctionThing.prototype = {
    getNameMethod: function() {
        return this.name;
    },

    getNameAndLog: function(getNameFunction) {
        console.log(getNameFunction());
    }
}

const arrowFunctionThing = new MyArrowFunctionThing();

arrowFunctionThing.getNameAndLog(arrowFunctionThing.getNameArrow); // Bob
arrowFunctionThing.getNameAndLog(arrowFunctionThing.getNameStandard); // Bob
arrowFunctionThing.getNameAndLog(arrowFunctionThing.getNameMethod); // undefined

console.log('-----------------');

console.log(arrowFunctionThing.getNameMethod());