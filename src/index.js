function getQueryParams(...params) {
  let result = {};

  // 统一把key前换成&, 方便之后写正则处理特定key值的提取
  const searchString = window.location.search.replace('?', '&');

  // 没有传入任何参数时，默认获取全部查询字符串参数
  if (params.length === 0) {
    const regx = /((?<=&)[^&=]+=[^&=]+)/g;
    const matching = searchString.match(regx);
    if (matching) {
      matching.forEach((item) => {
        const keyValue = item.split('=');
        result[keyValue[0]] = decodeURIComponent(keyValue[1]);
      })
    }
    return result;
  }

  // 按照传入的参数提取对应值
  const paramsHasValue = params[0].filter((item) => {
    return item !== '';
  })
  paramsHasValue.forEach((key) => {
    let regx = new RegExp(`(?<=&)${key}=([^&=]+)`);
    let matches = regx.exec(searchString);
    if (matches) {
      result[key] = decodeURIComponent(matches[1]);
    }
  })
  return result;
}

// export default getQueryParams;
export {
  getQueryParams
}