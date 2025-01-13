import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  setup() {
    const include = [
      'Home',
    ]
    return {
      include
    }
  },
  components: {
    
  },
  template: await getTemplate('/App')
}