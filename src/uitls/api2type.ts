export default (str: string, ignore: string[] = []): string => {
  // let index = 0;
  const stack: string[] = [];
  const ignores: string[] = ['非必须', 'format: int64', ...ignore];
  while (str) {
    const end = str.search(/\r|\n/);
    if (end === -1) {
      let s = str.replace(/\t(integer|number)/, ': number;');
      s = str.replace(/\t+string/, ': string;');
      stack.push(s);
      str = '';
      break;
    }
    let s = str.substring(0, end);
    if (!ignores.includes(s) && s) {
      s = s.trim();
      if (/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])/.test(s)) {
        let last = stack.pop();
        last = `// ${s}\r${last}`;
        stack.push(last);
      } else {
        s = s.replace(/\t(integer|number)/, ': number;');
        s = s.replace(/\t+string/, ': string;');
        stack.push(s);
      }
    }
    str = str.substring(end + 1);
    // index += end;
  }
  return stack.join('\r');
};
