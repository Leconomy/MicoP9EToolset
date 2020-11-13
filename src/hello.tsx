import { defineComponent, onMounted, getCurrentInstance } from 'vue';

export default defineComponent({
  setup (props, context) {
    onMounted(() => {
      setTimeout(() => {
        const inst = getCurrentInstance();
        console.log(context, props, inst);
      }, 2000);
    });
    return {};
  },
  data () {
    return {
      msg: 'hello'
    };
  },
  methods: {
    gen () {
      const {
        msg
      } = this;
      // const m = 1;
      if (msg === 'hello') {
        setTimeout(() => {
          this.msg = '11';
        }, 2000);
        return (
          <span>world</span>
        );
      }
      return (
        <span>hello</span>
      );
    }
  },
  render () {
    return (
      <div>
        { this.gen() }
      </div>
    );
  }
});
