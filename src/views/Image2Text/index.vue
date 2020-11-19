<template>
  <div class="image2Text">
    <img id="text-img" alt="Vue logo" src="../../assets/1.png">
    <button v-on:click="recognize">recognize</button>
  </div>
</template>
<script>
/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 * module.exports = {
 *   TESSERACT_ONLY: 0,
 *   LSTM_ONLY: 1,
 *   TESSERACT_LSTM_COMBINED: 2,
 *   DEFAULT: 3,
 * };
 *
 * PSM = Page Segmentation Mode
 * module.exports = {
 *   OSD_ONLY: '0',
 *   AUTO_OSD: '1',
 *   AUTO_ONLY: '2',
 *   AUTO: '3',
 *   SINGLE_COLUMN: '4',
 *   SINGLE_BLOCK_VERT_TEXT: '5',
 *   SINGLE_BLOCK: '6',
 *   SINGLE_LINE: '7',
 *   SINGLE_WORD: '8',
 *   CIRCLE_WORD: '9',
 *   SINGLE_CHAR: '10',
 *   SPARSE_TEXT: '11',
 *   SPARSE_TEXT_OSD: '12',
 * };
 */


import { createWorker, PSM, OEM } from 'tesseract.js';
const worker = createWorker({
  logger: m => console.log(m),
  langPath: '/'
});
export default {
  name: 'app',
  methods: {
    recognize: async () => {
      const img = document.getElementById('text-img');
      await worker.load();
      await worker.loadLanguage('chi_sim');
      await worker.initialize('chi_sim', OEM.SPARSE_TEXT);
      await worker.setParameters({
        /* eslint-disable @typescript-eslint/camelcase */
        tessedit_pageseg_mode: PSM.SPARSE_TEXT
      });
      const { data: { text } } = await worker.recognize(img);
      console.log(text);
    }
  }
};
</script>
<style scoped>
.image2Text {
  display: flex;
}
.image2Text img {
  width: 400px;
}
</style>
