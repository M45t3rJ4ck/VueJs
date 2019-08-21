new Vue ({
    el: '#app',
    data: {
        title: 'Becoming a legend',
        showName: false,
        showAge: true,
        name: 'Fluffy',
        wage: 10,
        url: 'http://www.goole.com',
        classes: ['one', 'two'],
        coords: {
            x: 0,
            y: 0
        },
        items: ['Mushrooms', 'Feta', 'Bacon', 'Pineapple'],
        employees: [
            {name: 'Piet', age: 69, hobby: 'smoking'},
            {name: 'Sannie', age: 96, hobby: 'drinking'},
            {name: 'Mike', age: 33, hobby: 'driving'}
        ]
    },
    methods: {
        greet(time){
            return `Hello ${ this.name }, Ready on ${ this.title } this ${ time } ?!`;
        },
        changeWage(amount){
            this.wage += amount;
        },
        logEvent(e){
            console.log(e);
        },
        logCoords(e){
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;
        },
        updateName(e){
            // console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage(){
            console.log('Hello World!');
        },
        toggleName(){
            this.showName = !this.showName;
        },
        toggleAge(){
            this.showAge = !this.showAge;
        }
    }
});