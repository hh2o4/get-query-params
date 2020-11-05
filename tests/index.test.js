import { getQueryParams } from '../src/index.js';

test('empty search, and all params', () => {
  let url = 'https://developer.mozilla.org'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams()).toEqual({})
})

test('empty search, and specific params', () => {
  let url = 'https://developer.mozilla.org'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams(['a'])).toEqual({})
})

test('URIEncoded search, and get all params in url', () => {
  let url = 'https://developer.mozilla.org?a=123&page=https%3A%2F%2Fwww.baidu.com#bar'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams()).toEqual({
    a: '123',
    page: 'https://www.baidu.com'
  })
})

test('URIEncoded search, and specific params in url', () => {
  let url = 'https://developer.mozilla.org?a=123&page=https%3A%2F%2Fwww.baidu.com#bar'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams(['a'])).toEqual({
    a: '123'
  })
  expect(getQueryParams(['page'])).toEqual({
    page: 'https://www.baidu.com'
  })
})

test('illegal URIEncoded search, and all params in url', () => {
  let url = 'https://developer.mozilla.org?a=123&&&b===&&c=testpage=https%3A%2F%2Fwww.baidu.com#bar'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams()).toEqual({
    a: '123',
    c: 'testpage'
  })
})

test('illegal URIEncoded search, and specific params in url', () => {
  let url = 'https://developer.mozilla.org?a=123&&&b===&&c=testpage=https%3A%2F%2Fwww.baidu.com#bar'
  Object.defineProperty(window, 'location', {
    value: new URL(url),
    writable: true
  })
  expect(getQueryParams(['a'])).toEqual({
    a: '123'
  })

  expect(getQueryParams(['page'])).toEqual({})
})