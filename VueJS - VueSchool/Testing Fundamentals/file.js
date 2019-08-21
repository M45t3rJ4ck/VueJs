import { Permissions } from '@/lib/permissions';

// Small parts to be tested, but mainly the areas directly involved with user flow:
class User {

    // Not to be tested in first run as it gets called in every other function:
    constructor(details, traits = {}) {
        const { firstname, lastname } = details;
        this.firstname = firstname;
        this.lastname = lastname;
        this.traits = traits;

        this.sessionStartedAt = Date.now();
    }

    // To be testing with first test run:
    get name() {
        return `${ this.firstname } ${ this.lastname }`;
    }

    // To be testing with first test run - not that user is admin, but permissions get called for as wanted:
    get isAdmin() {
        return Permissions.granted(this, 'admin');
    }

    // Partial Yes, but in combination of extendSession:
    get currentSessionIsValid() {
        const tenMinutesInMiliseconds = 600000;
        return (this.sessionStartedAt + tenMinutesInMiliseconds) < Date.now();
    }

    extendSession() {
        this.sessionStartedAt = Date.now();
    }
}