import { defineComponent, ref } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
    },

    min: {
      min: Number,
      default: 0,
    },

    max: {
      max: Number,
      default: 10,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне

    function increment() {
      emit('update:count', props.count + 1);
    }

    function decrement() {
      emit('update:count', props.count - 1);;
    }

    return {
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton @click="decrement" aria-label="Decrement" :disabled="count == min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton @click="increment" aria-label="Increment" :disabled="count == max">➕</UiButton>
    </div>
  `,
})
