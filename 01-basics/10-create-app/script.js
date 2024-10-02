import { defineComponent, createApp } from 'vue'
const App = defineComponent({
    name: 'App',
    template:`<div>Сегодня {{ new Intl.DateTimeFormat("en", {dateStyle: "long"}).format(now) }}</div>`,
    
}) 

createApp(App).mount('#app')