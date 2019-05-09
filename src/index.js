import React from 'react';
import ReactDOM from 'react-dom';

const str = '<a href="">哈哈</a>';
const str1 = 'wen'

ReactDOM.render(
  <>
    <h1 className={ str1 }>hello world</h1>
    { str1 }
    <p dangerouslySetInnerHTML={{__html: str}}></p>
  </>,
  document.getElementById('root')
)
