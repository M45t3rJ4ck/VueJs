class User {

    constructor(details) {
        const { firstname, lastname } = details;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get name() {
        return `${ this.firstname } ${ this.lastname }`;
    }
}

const nameTest = function() {

    const userDetails = {
        firstname: 'Riaan',
        lastname: 'Voges'
    };

    const testUser = new User(userDetails);
    console.log('Username is correct: ', testUser.name === 'Riaan Voges');
};

nameTest();
