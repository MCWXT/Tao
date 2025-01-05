import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  name: 'HelloWorld',
  props: ['str'],
  setup() {

    return {

    }
  },
  template: await getTemplate('/templates/components/helloWorld.html')
}