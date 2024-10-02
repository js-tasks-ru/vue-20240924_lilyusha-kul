import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'


export default defineComponent({
  name: 'WeatherApp',
  
  setup() {
    return { 
      cities: getWeatherData(),
      WeatherConditionIcons,
     }
  },
  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list">
      <li v-for="value in cities" :class= "['weather-card', {'weather-card--night':(value.current.sunrise>value.current.dt && value.current.dt<value.current.sunset)}]">     
      <div v-if="value.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ value.geographic_name }}
            </h2>
            <div class="weather-card__time">
            {{ value.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
          <div class="weather-conditions__icon" :title="value.current.weather.description">{{WeatherConditionIcons[value.current.weather.id]}}</div>  
            <div class="weather-conditions__temp">{{ (value.current.temp - 273.15).toFixed(1)}} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ (value.current.pressure * 0.75).toFixed(0)}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value"> {{ value.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ value.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ value.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})

