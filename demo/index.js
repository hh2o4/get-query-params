import { getQueryParams } from '../src/index.js';

window.addEventListener('load', () => {
  const allParams = getQueryParams();
  let html = JSON.stringify(allParams, null, 4);
  html = html.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp');
  document.getElementById('wholeParams').innerHTML = html;
  bindClickEvent();
  bindInputSearching();
})

function bindClickEvent() {
  document.getElementById('search').addEventListener('click', () => {
    const input = document.getElementById('param').value;
    const result = getQueryParams(input.split(','));
    let html = JSON.stringify(result, null, 4);
    html = html.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp');
    document.getElementById('partParams').innerHTML = html;
  })
}

function bindInputSearching() {
  document.getElementById('inputSearching').addEventListener('click', () => {
    const input = document.getElementById('urlSearching').value;
    window.location.search = input;
  })
}