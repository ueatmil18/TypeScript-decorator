// Class decorators
function classDecorator(target: Function) {
    console.log(target);
}

@classDecorator
class MyClass {
    constructor() {
        console.log('Mi Clase Personal')
    }
}

function changeName(data: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            name = data;
        }
    }
}

@changeName('Manuel')
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} Salúdame!`)
    }
}

new Person('Juan').sayHi(); // Manuel Salúdame!