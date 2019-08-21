// Vue.component('click-counter', {
//     template: '#click-counter-template',
//     data () {
//         return {
//             count: 0
//         };
//     }
// });

// Local Components:
let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    // Props are cast from atributes that can be registered on components:
    // props: ['name']
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan;
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name);
        }
    }
};

// Local Components:
let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        planPickerItem: PlanPickerItemComponent
    },
    data() {
        return {
            plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        };
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    }
};

// Global Components:
// Vue.component('plan-picker', {
//     template: '#plan-picker-template',
//     components: {
//         plan: PlanComponent
//     },
//     data () {
//         return {
//             plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict']
//         };
//     }
// });

// Global Components:
// Vue.component('plan', {
//     template: '#plan-template',
//     // Props are cast from atributes that can be registered on components:
//     // props: ['name']
//     props: {
//         name: {
//             type: String,
//             required: true
//         }
//     }
// });

new Vue({
    el: '#app',
    // data: {
    //     plans: ['The Hacker', 'The Single', 'The Curious', 'The Addict']
    // }
    components: {
        PlanPicker: PlanPickerComponent
    }
});