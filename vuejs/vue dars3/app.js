const app = Vue.createApp({
    data() {
        return {
            counter:0,
            name:'',
            sourname:'',
        }
    },
    methods: {
        setName(event){
            this.name = event.target.value
        },
        surName(event){
            this.sourname = event.target.value
        },
        add(num){
            this.counter = this.counter+num
        },
        reduce(num){
            this.counter = this.counter-num
        }
    },
})
app.mount('#Good')