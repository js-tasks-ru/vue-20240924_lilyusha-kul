import { defineComponent } from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['remove'],

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem 
        v-on:remove="$emit('remove', index)"
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
      />
    </ul>
  `,
})
