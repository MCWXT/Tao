import { ref } from 'vue';
import { getTemplate } from 'tao';
export default {
  setup() {
    const include = ['Discussion'];
    return {
      include
    }
  },
  components: {
    
  },
  template: await getTemplate('/templates/app.html')
}