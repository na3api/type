/**
 * Created by nazar on 26.01.17.
 */
console.log('1');
var CoWorker = (function () {
    function CoWorker(info) {
        this.campaign = 'Bytebrand';
        this.name = info.name;
        this.age = info.age;
        this.position = info.position;
    }
    ;
    CoWorker.prototype.getInfo = function () {
        return this.name + '(' + this.campaign + '): ' + this.age + '(' + this.position + ')';
    };
    return CoWorker;
}());
function greeter(person) {
    var result = '';
    for (var key in person) {
        result += (key + ': ' + person[key] + ', ');
    }
    return result;
}
function error(message) {
    throw new Error(message);
}
function warnUser() {
    return "This is my warning message";
}
var properties;
(function (properties) {
    properties[properties["Name"] = 0] = "Name";
    properties[properties["Age"] = 1] = "Age";
    properties[properties["Position"] = 2] = "Position";
})(properties || (properties = {}));
var users = [
    { name: 'Nazar', age: 26, position: 'Developer' },
    { name: 'Jane', age: 24, position: 'Human Resource' },
    { name: 'Any', age: 22, position: 'Manager' },
];
var work = new CoWorker(users[0]);
console.log(work.getInfo());
//error(warnUser()); 

//# sourceMappingURL=app.js.map
