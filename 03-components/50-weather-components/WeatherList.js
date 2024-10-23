import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from './WeatherCard.js'

export default defineComponent({
  name: 'WeatherList',
  
  components: {
    WeatherCard,
    }, 

  setup() {
    const cities = getWeatherData()
    return { 
      cities,
      WeatherConditionIcons,
     }
  },

  template: `
  <ul class="weather-list unstyled-list">
    <li v-for="value in cities" :class= "['weather-card', {'weather-card--night':(value.current.sunrise>value.current.dt && value.current.dt<value.current.sunset)}]">     
      <WeatherCard :city="value" />
    </li>  
  </ul>
  `,
})