import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import OnikuImage from '../Images/OnikuImage';

const Header = styled.header`
  background-color: #F3F1F0;
  color: #222222;
  height: 60px;

  .header-component {
    display: flex;
  }

  .header-left-area {
    display: flex;
    margin-left: 202px;
  }

  .header-title {
    padding-top: 6px;
    width: 142px;
  }

  .header-title-area {
    align-items: center;
    display: flex;
  }

  h2 {
    font-size: 22px;
    font-family: Righteous;
  }

  h2.header-title-year {
    font-size: 12px;
  }

  .header-title-oniku {
    height: 22px;
    width: 22px;
  }

  .header-subtitle-area {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-family: Righteous;
    font-weight: bold;
  }

  p.header-subtitle-reiwa-ja {
    font-size: 12px;
    font-weight: 700;
  }

  p.header-subtitle-reiwa-en {
    font-size: 8px;
  }

  p.header-subtitle-summer {
    font-size: 14px;
  }

  .header-speech-bubble-area {
    margin-left: 16px;
    width: 340px;
  }

  .header-speech-bubble {
    position: relative;
    display: inline-block;
    margin: 12px 15px 12px 0;
    padding: 0 5px;
    width: 340px;
    height: 36px;
    line-height: 1.2;
    text-align: center;
    color: #222222;
    font-size: 16px;
    font-weight: bold;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .header-speech-bubble:before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: -4px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-left: 15px solid #fff;
    z-index: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .header-speech-bubble-text {
    font-size: 14px;
    font-family: Montserrat;
    font-weight: bold;
    line-height: 2.6;
  }

  a {
    text-decoration: none;
  }

  a.header-tag-link {
    color: #FF6500;
  }

  .header-nav-area {
    display: flex;
    justify-content: space-between;
    margin: 12px 348px 0 306px;
    width: 80px;

  }

  .header-sns-back {
    background-color: #fff;
    border-radius: 50%;
    height: 32px;
    text-align: center;
    padding-top: 10px;
    width: 32px;
  }

  #fb {
    margin-left: 12px;
  }

`;

export default () => (
  <Header>
    <div className="header-component">
      <div className="header-left-area">
        <div className="header-title">
          <div className="header-title-area">
            <h2 className="header-title-main">MEAT UP</h2>
            <div className="header-title-oniku"><OnikuImage /></div>
            <h2 className="header-title-year">2019</h2>
          </div>
          <div className="header-subtitle-area">
            <p className="header-subtitle-reiwa-ja">令和</p>
            <p className="header-subtitle-reiwa-en">REIWA</p>
            <p className="header-subtitle-summer">- SUMMER -</p>
          </div>
        </div>
        <div className="header-speech-bubble-area">
          <div className="header-speech-bubble">
            <p className="header-speech-bubble-text">
              ハッシュタグ「
              <a href="https://twitter.com/hashtag/meatup2019" className="header-tag-link" target="_blank" rel="noopener noreferrer">#meatup2019</a>
              」で盛り上がろう
            </p>
          </div>
        </div>
      </div>
      <div className="header-nav-area">
        <div className="header-sns-back" id="tw">
          <i className="fab fa-twitter fa-lg" style={{ color: '#1DA1F2' }} />
        </div>
        <div className="header-sns-back" id="fb">
          <i className="fab fa-facebook-f fa-lg" style={{ color: '#3A5997' }} />
        </div>
      </div>
    </div>
  </Header>
);
