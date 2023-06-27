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
    }
});