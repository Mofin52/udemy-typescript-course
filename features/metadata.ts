import 'reflect-metadata';

const plane = {
    color: 'red'
};

// Defining/getting metadata for object
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.getMetadata('note', plane);

// Defining/getting metadata for object's key
Reflect.defineMetadata('note', 'hi there', plane, 'color');
Reflect.getMetadata('note', plane, 'color');

// Metadata with class method
@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vroom');
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const middleware = Reflect.getMetadata(
            'middleware',
            target.prototype,
            key
        );
        // router.get(path, middleware, target.prototype[key]);
    }
}
