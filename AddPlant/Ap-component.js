import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>Count is: {{ count }}</div>`
}

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