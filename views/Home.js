import { ref } from 'vue';
import { getTemplate } from 'tao';
import HelloWorld from '/components/HelloWorld.js';
export default {
  setup() {
    const str = 'Tao';
    return {
      str
    }
  },
  components: {
    HelloWorld
  },
  name: 'Home',
  template: await getTemplate('/views/Home')
}