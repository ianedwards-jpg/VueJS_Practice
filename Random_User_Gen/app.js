const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>', //Uses Declarative Rendering- I.e calls an object by an identifer 
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api') //API Call to obtain random user data objects
            const { results } = await res.json() //Destructure results object via .json() method
            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

            // console.log(results[0].name.first) // Test API call to get random results for 1 user
        },
    },
})

app.mount('#app')


// https://codepen.io/bradtraversy/pen/LYbzJjK