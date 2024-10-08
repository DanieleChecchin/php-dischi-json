const { createApp } = Vue

createApp({
    data() {
        return {
            disksList: [],
        }
    },
    methods: {
        // Chiamata API
        getDisks() {
            axios.get('http://localhost/php-dischi-json/api/')
                .then((response) => {
                    // handle success
                    console.log(response.data);
                    this.disksList = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created() {
        this.getDisks();
    },



}).mount('#app')
