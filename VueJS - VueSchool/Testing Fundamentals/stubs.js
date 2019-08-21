let Pokemon = {
    amount() {
        // Call to database
    },

    say(str) {
        console.log('Your Pokedex says: ', str);
    }
};

function howsMyCollection() {

    const size = Pokemon.amount();
    if (size === undefined)
        return Pokemon.say('Ooops, not sure how many you have');
    if (size < 10)
        return Pokemon.say('You only have a few, you need more');
    if (size < 50)
        return Pokemon.say('You have quite some favorites, keep going');
    return Pokemon.say('You are quite a collector');
}

const originalAmount = Pokemon.amount;

function stubAmount(amount) {
    Pokemon.amount = () => amount;
}

function havePokemons(amount) {
    stubAmount(amount);
    howsMyCollection();
}

havePokemons(5);
havePokemons(17);
havePokemons(100);
