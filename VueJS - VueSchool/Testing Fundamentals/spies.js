class Session {
    constructor() {
        this.lastUpdate = Date.now();
    }

    touch() {
        this.lastUpdate = Date.now();
    }
}

function spyOn(Object, method) { ... }

const datespy = spyOn(Date, 'now');

Date.now();

console.log(datespy.called.length > 0);
