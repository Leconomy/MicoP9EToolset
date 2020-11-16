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
    </div>
  </section>
</template>
<script>
import api2type from '../uitls/api2type';
export default {
  data () {
    return {
      input: '',
      output: ''
    };
  },
  methods: {
    handleTransfer () {
      this.output = api2type(this.input);
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
    min-height: 600px;
  }
  .transfefBtn {
    width: 200px;
  }
  .outputBox {
    flex: 1;
  }
</style>
