<template>
  <section
    class="api2typeBox"
  >
    <div
      class='inputBox'
    >
      <a-textarea
        v-model:value='input'
      />
    </div>
    <div
       class='transfefBtn'
    >
      <a-button
        type='primary'
        @click='handleTransfer'
      >
        转换
      </a-button>
    </div>
    <div
      class='outputBox'
    >
      <a-textarea
        v-model:value='output'
      />
      <a-textarea
        className='outview'
        class='out'
        id='output'
        v-model:value='output'
      />
      <a-button
        type='primary'
        @click='copy'
      >
        复制
      </a-button>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import api2type from '@/uitls/api2type';
export default {
  setup () {
    const $output = ref(null);

    onMounted(() => {
      console.dir($output);
    });

    return {
      $output
    };
  },
  data () {
    return {
      input: '',
      output: ''
    };
  },
  methods: {
    /**
     * 转换为 typescript 的interface
     */
    handleTransfer () {
      this.output = api2type({
        value: this.input
      });
    },
    /**
     * 拷贝转换后的结果
     */
    copy () {
      const outputDom = document.getElementById('output');
      outputDom.select();
      document.execCommand('copy');
      message.success('复制成功');
    }
  }
};
</script>
<style scoped>
  .api2typeBox {
    display: flex;
  }
  .inputBox {
    flex: 1;
    display: flex;
    min-height: 400px;
  }
  .transfefBtn {
    width: 200px;
  }
  .outputBox {
    flex: 1;
    display: flex;
    position: relative;
    min-height: 400px;
  }
  #output {
    position: absolute;
    left: 9999px;
    top: 9999px;
  }
</style>
