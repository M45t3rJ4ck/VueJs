Vue.component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        header: {
            type: String,
            default: 'Oh Really'
        }
    },
    data() {
        return {
            hidden: false
        };
    },
    methods: {
        hide() {
            this.hidden = true;
        }
    }
});

Vue.component('github-user-card', {
    template: '#github-user-card-template',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            user: {

            }
        };
    },
    created() {
        axios.get(`https://api.github.com/users/${this.username}`).then(response => {
            this.user = response.data;
        });
    }
});

new Vue({
    el: '#app',
    data: {
        usernames: ['M45t3rJ4ck']
    }
});