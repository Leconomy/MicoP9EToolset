<template>
  <section class="api2typeBox">
    <div class='inputBox'>
      <a-textarea v-model:value='input' />
      <div class='clear'>
        <a-button type='primary' @click='clear'>清空</a-button>
      </div>
    </div>
    <div class='transfefBtn'>
      <a-button type='primary' @click='handleTransfer'>转换</a-button>
    </div>
    <div class='outputBox'>
      <a-textarea v-model:value='output' />
      <a-textarea id='output' v-model:value='output' />
      <div class='copyBox'>
        <a-button type='primary' :disabled='!output' @click='copy'>复制</a-button>
      </div>
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
    },
    clear () {
      this.input = '';
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
    position: relative;
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
  .clear,
  .copyBox {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
