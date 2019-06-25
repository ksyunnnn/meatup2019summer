/* eslint-disable no-undef */
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const colors = {
  orange: '#FF6500',
  gray: '#F8F8F8',
  white: '#fff',
};

export const baseUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=LCXIePDZjEOjQNjnjaR3fwsiJ9BKpeGz8bdIeHE16gniDxr_FccxkR2No4yc5WgYvIiR3c0Gk0Tm1YrAQx0I3FMx1JyiFakJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKXPWY-xrzuMjU0fgjQoVk5SNtWtYLviO6sytNOKqxqn52B-N95JpykKZIon12D3Oul2rqT0V69V&lib=MPBfxU9V3-aEe1OCXKcZu4EjsOTksYyEw';

export const DataContext = React.createContext();

export const countUp = (exec, max) => {
  let count = 0;
  const countHandle = setInterval(() => {
    exec();
    // eslint-disable-next-line no-plusplus
    if (count++ > max - 2)clearInterval(countHandle);
  }, 50);
};

export const copyToClipboard = (copyValue) => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  let isSafari = false;

  const textareaElement = document.createElement('textarea');

  if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
    // console.log('Internet Explorerをお使いですね');
  } else if (userAgent.indexOf('edge') !== -1) {
    // console.log('Edgeをお使いですね');
  } else if (userAgent.indexOf('chrome') !== -1) {
    // console.log('Google Chromeをお使いですね');
  } else if (userAgent.indexOf('safari') !== -1) {
    // console.log('Safariをお使いですね');
    isSafari = true;
  } else if (userAgent.indexOf('firefox') !== -1) {
    // console.log('FireFoxをお使いですね');
  } else if (userAgent.indexOf('opera') !== -1) {
    // console.log('Operaをお使いですね');
  } else {
    // console.log('そんなブラウザは知らん');
  }


  textareaElement.value = copyValue;

  document.body.appendChild(textareaElement);

  if (isSafari) {
    const range = document.createRange();
    range.selectNode(textareaElement);
    window.getSelection().addRange(range);
  } else {
    textareaElement.select();
  }


  document.execCommand('copy');
  textareaElement.parentElement.removeChild(textareaElement);
};
