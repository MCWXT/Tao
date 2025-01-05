import { ref } from 'vue';
import { getTemplate } from 'tao';
import HelloWorld from '/components/helloWorld.js';
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
  template: await getTemplate('/templates/views/home.html')
}