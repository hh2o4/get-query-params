function getQueryParams(...params) {
  let result = {};
  const searchString = window.location.search.slice(1);

  // 没有传入任何参数时，默认获取全部查询字符串参数
  if (params.length === 0) {
    const paramsArray = searchString.split('&');
    paramsArray.forEach((item) => {
      const keyValue = item.split('=');
      result[keyValue[0]] = keyValue[1];
    })
    return result;
  }

  // 按照传入的参数提取对应值
  const paramsHasValue = params[0].filter((item) => {
    return item !== '';
  })
  paramsHasValue.forEach((key) => {
    let regx = new RegExp(`${key}=([^&]+)`);
    let matches = regx.exec(searchString);
    if (matches) {
      result[key] = matches[1];
    }
  })
  return result;
}

// export default getQueryParams;
export {
  getQueryParams
}