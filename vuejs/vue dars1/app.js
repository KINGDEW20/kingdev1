const app = Vue.createApp({
    data() {
        return {
        goals:[],
        enteredvalue:''
        };     
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue ="";
        }
    },
});

app.mount("#Good")