import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const x = ref(0)
    const y = ref(0)
  
    const operator = ref('sum')

    const result = computed(() => {
      if(operator.value == 'sum'){
        return x.value + y.value;
      }
      
      if(operator.value == 'subtract'){
        return x.value - y.value;
      } 
      
      if(operator.value == 'multiply'){
        return x.value * y.value;
      }
      
      if(operator.value == 'divide'){
        return x.value / y.value;
      }
      
      return 0
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

      <output>{{ result }}</output>
    </div>
  `,
})
