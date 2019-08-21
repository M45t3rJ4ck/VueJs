var axios = require('axios');

// Output promise visually
var posts = axios.get('https://jsonplaceholder.typicode.com/posts/1');
console.log('1) ', posts);

axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
    console.log('2.1) ', response);
    console.log('2.2) ', response.data);
}).catch((err) => {
    console.log('3) ', err);
});