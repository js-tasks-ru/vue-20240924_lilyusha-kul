import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherCard',
  
    props: {
        city: {
            type: Object,
            required: true,
        },
    },
    
    setup() {
      return { 
        WeatherConditionIcons,
      }
    },
    
  template: `
  <div v-if="city.alert" class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
      </div>
      <div>
        <h2 class="weather-card__name">
          {{ city.geographic_name }}
        </h2>
        <div class="weather-card__time">
        {{ city.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="city.current.weather.description">{{ WeatherConditionIcons[city.current.weather.id] }}</div>  
        <div class="weather-conditions__temp">{{ (city.current.temp - 273.15).toFixed(1) }} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">{{ (city.current.pressure * 0.75).toFixed(0) }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value"> {{ city.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ city.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ city.current.wind_speed }}</div>
        </div>
      </div>
  `,
})