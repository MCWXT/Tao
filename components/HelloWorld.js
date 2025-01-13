import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  props: ['str'],
  setup() {

    return {

    }
  },
  name: 'HelloWorld',
  template: await getTemplate('/components/HelloWorld')
}