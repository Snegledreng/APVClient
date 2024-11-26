Vue.createApp({
    data() {
        return {
            isVisible: false
        }
    },
    created() {
    },
    methods: {
        toggleIsVisible() {
            this.isVisible = !this.isVisible
        }
    }
}).mount('#app')