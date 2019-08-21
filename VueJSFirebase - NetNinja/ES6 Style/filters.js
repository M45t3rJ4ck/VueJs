var users = [
    { name: 'Mario', premium: true },
    { name: 'Luigi', premium: true },
    { name: 'Yoshi', premium: false },
    { name: 'Toad', premium: false }
];

var user1 = users.filter((item) => {
    console.log('1) ', item);
});

var user2 = users.filter((item) => {
    return true;
});

var user3 = users.filter((item) => {
    return false;
});

var user4 = users.filter((item) => {
    return item.premium;
});

var user5 = users.filter((item) => {
    return !item.premium;
});

console.log('2) ', user2);
console.log('3) ', user3);
console.log('4) ', user4);
console.log('5) ', user5);