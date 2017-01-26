/**
 * Created by nazar on 26.01.17.
 */
console.log('1')
interface Person {
    readonly campaign : string;
    name    : string;
    age     : number;
    skils   ?: string[]
}

class CoWorker implements Person{
    campaign = 'Bytebrand';
    name: string;
    age: number;
    position: string;
    constructor(info : {name, age, position}) {
        this.name       = info.name;
        this.age        = info.age;
        this.position   = info.position;
    };

    public getInfo() : string {
        return this.name + '(' + this.campaign +'): ' + this.age + '(' + this.position + ')';
    }
}

function greeter(person : Person) {
    let result:string = '';
    for(var key in person){
        result += (key + ': ' + person[key] + ', ');
    }
    return result;
}
function error(message: string): never {
    throw new Error(message);
}

function warnUser() {
    return "This is my warning message";
}

enum properties {'Name', 'Age', 'Position'}

let users = [
    {name:'Nazar', age:26, position:'Developer'},
    {name:'Jane',  age:24, position:'Human Resource'},
    {name:'Any',   age:22, position:'Manager'},
];

let work = new CoWorker(users[0]);
console.log(work.getInfo());
//error(warnUser());