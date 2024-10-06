import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const x = ref(0)
    const y = ref(0)
    const result = ref(0)
    const operator = ref('sum')

    watch([x, y, operator], () => {
      if(operator.value == 'sum'){
        result.value = x.value + y.value;
      } else if(operator.value == 'subtract'){
        result.value = x.value - y.value;
      } else if(operator.value == 'multiply'){
        result.value = x.value * y.value;
      } else if(operator.value == 'divide'){
        result.value = x.value / y.value;
      }
    })

    return{
      x,
      y,
      result,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input v-model="x" type="number" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="y" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{result}}</output>
    </div>
  `,
})
