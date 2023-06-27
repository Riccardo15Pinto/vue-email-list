//check console log
console.log('ok js');
console.log('ok vue', Vue);

//add API
const component = 'https://flynn.boolean.careers/exercises/api/random/mail';

//Create app
const app = Vue.createApp({
    data(){
        return {
            //create empty array 
            emails:[],
            // create items
            items : 10,
        }
    },
    methods:{
        //method for call tot number of emails by component 
        getRandomEmails(){
            for(let i = 0; i < this.items; i++){
                axios.get(component)
                    .then( (result) => {
                        const email = result.data.response;
                        console.log(email)
                        this.emails.push(email);
                    });
            }
        },
    },
    created(){
        //at the start of the page
        this.getRandomEmails();
    }

});

//print in DOM
app.mount('#root');