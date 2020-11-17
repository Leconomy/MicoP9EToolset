interface ConfigInterface {
  value: string;
  matchIgnore: string[];
  startIgnore: string[];
}
/**
 * 判断是否以某字符串开头
 * @param str 待处理的字符串
 */
function startWith (str: string, startIgnore: string[] = []): boolean {
  const startArr = ['示例', 'format', '最大值', '最小值', '枚举', ...startIgnore];
  let flag = false;
  for (let i = 0; i < startArr.length; i++) {
    if (str.startsWith(startArr[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function genType (stack: string[]): string {
  let str = '';

  while (stack.length) {
    let typeStr = stack.shift() || '';
    let comment = stack.shift() || '';
    if (/\s+(string|number)/.test(typeStr)) {
      typeStr = typeStr.replace(/\s+(string|number)/g, ': $1;');
    } else if (/\s+integer/.test(typeStr)) {
      typeStr = typeStr.replace(/\s+integer/g, ': number;');
    } else {
      typeStr = typeStr.replace(/\s+(.+)/g, ': $1;');
    }
    comment = `// ${comment}`;
    str += `${comment}\r${typeStr}\r`;
  }

  return str;
}

export default (config: ConfigInterface): string => {
  const {
    value,
    matchIgnore = [],
    startIgnore = []
  } = config;

  let str = value;
  const stack: string[] = [];
  const ignores: string[] = ['非必须', '是', '否', '必须', 'string', 'object', ...matchIgnore];

  while (str) {
    str = str.trimLeft();
    let end = str.search(/\r|\n/);
    let subStr = str.substring(0, end).trim();
    if (end === -1) {
      subStr = str;
      end = str.length;
    }

    // 字串不是应该被忽略的字符串且不是以被忽略的字符串开头
    if (subStr && !ignores.includes(subStr) && !startWith(subStr, startIgnore)) {
      stack.push(subStr.trim());
    }
    str = str.substring(end);
  }

  return genType(stack);
};
