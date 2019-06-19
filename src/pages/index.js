/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import OnikuImage from '../components/molecules/Images/OnikuImage';
import SEO from '../components/seo';

import Oniku01 from '../components/molecules/Images/Oniku01';
import Oniku02 from '../components/molecules/Images/Oniku02';
import Atom01 from '../components/molecules/Images/Atom01';
import Atom02 from '../components/molecules/Images/Atom02';
import Forms from '../components/organisms/Forms';
import CardStyle from '../components/molecules/CardStyle';

import { colors } from '../helpers/State';
import media from '../helpers/MediaQuery';

const copyToClipboard = () => {
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


  textareaElement.value = `
･名前

･性別

･Web歴
未経験 / 1年未満 / 2年~4年 / 5年~
･職域
フロントエンド / バックエンド / デザイン / ディレクター / 学生 / その他
･好きな肉の部位

･肉に一番合うもの

  `;
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

const MainWrapper = styled.div`
  padding-bottom: 80px;
`;

const HeroSection = styled.section`
  padding-top: 80px;
  padding-bottom: 110px;
  text-align: center;
  h3 {
    font-size: 16px;
    margin-bottom: 40px;
    font-weight: bold;
  }
  h1 {
    display: grid;
    .wrapper {
      display: float;
      justify-content: center;
    }
    span.title {
      font-size: 68px;
    }
  }
  span.year {
    background: ${colors.orange};
    color: ${colors.white};
    font-size: 40px;
    padding: 0 8px;
    margin-right: 16px;
  }
  .oniku {
    width: 64px;
    margin: auto;
    padding: 16px 0;
    padding-bottom: 28px;
  }
  .date {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 48px;
    span { display: block; }
    .place {
      padding-top: 1.5em;
      i { 
        margin-right: 8px;
        color: ${colors.orange};
       }
    }
  }
  .button-wrapper {
    display: grid;
    row-gap: 8px;
    justify-content: center;
  }
`;

const StyledButton = styled(Link)`
  width: 300px;
  height: 48px;
  line-height: 48px;
  color: ${props => props.orange && colors.orange};
  font-weight: 800;
  border: 3px solid;
  border-radius: 24px;
  background: ${colors.white};
  font-size: 16px;
  text-decoration: none;
  :active {
    background: #eee;
  }
`;

const DetailSection = styled.section`
  padding: 0 36px;
  padding-top: 74px;
  background: ${colors.gray};
  text-align: center;

  overflow: hidden;

  .photo-list {
    display: grid;
    row-gap: 24px;
    max-width: 400px;
    margin: auto;
    margin-bottom: 100px;
    > * {
      border: 5px solid ${colors.white};
    }
  }

  .schedule {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    ul {
      display: grid;
      row-gap: 16px;
    }
    li {
      letter-spacing: 1px;
    }
  }

  ul.data-list {
    display: grid;
    row-gap: 16px;
    column-gap: 16px;
    grid-template-columns: 320px 320px;
    justify-content: center;
    margin-bottom: 100px;
    padding-bottom: 50px;
    ${media.mobile`
      column-gap: none;
      grid-template-columns: none;
    `}
    p.pre {
      font-weight: 900;
      font-size: 20px;
      letter-spacing: 1.46px;
      color: #B1B1B1;
      margin-top: 40px;
    }
  }
`;

const FormSection = styled.section`
  max-width: 780px;
  margin: auto;
  padding: 0 40px;
  padding-top: 74px;
  h4 { margin-bottom: 16px; }
  p {
    line-height: 2em;
  }
  ul.steps {
    display: grid;
    row-gap: 40px;
  }
  ul.questionnaire {
    padding: 16px 0;
    display: grid;
    row-gap: 4px;
    font-size: 11px;
    letter-spacing: 1px;
    margin-left: 24px;
    li { list-style: disc; }
  }
  button.copy-button {
    padding: 4px;
    border: 1px;
    outline-width: medium;
    background: #fff;
    margin-bottom: 24px;
  }
`;

const ShareSection = styled.section`
  background: ${colors.gray};
  padding: 80px 40px;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  ${media.mobile`
    
  `}
`;

const Footer = styled.footer`
  padding: 40px 16px;
  text-align: center;
`;

const ScrollToTopButton = styled(Link)`
  position: fixed;
  font-size: 48px;
  bottom: 4px;
  right: 4px;
  height: 64px;
  width: 64px;
  text-align: center;
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <MainWrapper>
      <HeroSection id="top">
        <h3>
          参加者募集開始〜
          <span role="img" aria-label="tada">🎉</span>
        </h3>
        <h1>
          <div className="wrapper">
            <span className="year">2019</span>
            <span>REIWA SUMMER</span>
          </div>
          <span className="title">MEATUP</span>
        </h1>
        <div className="oniku"><OnikuImage /></div>
        <div className="date">
          <span>
            <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MW5mcTlrbmJ1ZGZsYmt1dWo0MG5qczYyaW4gZnBvbGdxZ2wzYmdlcnE2NTJzaHIwaG9uc2NAZw&amp;tmsrc=fpolgqgl3bgerq652shr0honsc%40group.calendar.google.com"><i style={{ marginRight: '8px', color: colors.orange }} className="far fa-calendar-plus" /></a>
            2019.07.20(Sat.)
          </span>
          <span>11:00 open ~ 19:00 close </span>
          <span>entry ¥4,000</span>
          <span className="place">
            <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/NX273kTyHT5NrSvF8">
              <i className="fas fa-map-marker-alt" />
            EAT TOKYO JAKUZURE
            </a>
          </span>
          <span style={{ fontSize: '16px', letterSpacing: '1px' }}>東京都目黒区上目黒5-30-12</span>
          <Link to="access" style={{ fontSize: '16px', letterSpacing: '1px' }}>詳しい行き方はこちら</Link>
        </div>
        <div className="button-wrapper">
          <StyledButton orange to="/#joinform">
            <i className="fas fa-angle-double-down" style={{ marginRight: '8px' }} />
            はよ参加登録させてくれ
          </StyledButton>
          <StyledButton to="/#detail">
            <i className="fas fa-angle-double-down" style={{ marginRight: '8px' }} />
            まずは内容を見せて欲しい
          </StyledButton>
        </div>
      </HeroSection>

      <DetailSection id="detail">
        <h2>About MEATUP</h2>
        <h3>
肉を通してわいがや交流する
          <br />
イベントです
          <span role="img" aria-label="hand">✌🍖</span>
        </h3>
        <div className="photo-list">
          <Oniku01 />
          <Atom01 />
          <Oniku02 />
          <Atom02 />
        </div>

        <h2>Schedule</h2>
        <div className="schedule">
          <CardStyle>
            <ul>
              <h4>肉。</h4>
              <li>
               11:00~ : 開場
              </li>
              <li>
                12:00~ : 乾杯して肉食う
              </li>
              <li>
               12:00~13:00 : 肉料理 by
                {' '}
                <a href="https://twitter.com/naoki_ffc_96" target="_blank" rel="noopener noreferrer">naoki</a>
              </li>
              <li>
               13:00~15:00 :
                {' '}
                <a href="https://twitter.com/search?q=%23meatup2019%20%E3%81%AA%E3%81%AB%E3%81%8B%E4%BC%81%E7%94%BB" target="_blank" rel="noopener noreferrer">なにか企画</a>
              </li>
              <h4 style={{ marginTop: '16px' }}>交流。</h4>
              <li>
               15:00~18:00 :
                {' '}
                <a href="https://twitter.com/search?q=%23meatup2019%20%E9%9F%B3%E6%A5%BD%E7%B3%BB%E3%81%AE%E3%81%AA%E3%81%AB%E3%81%8B" target="_blank" rel="noopener noreferrer">音楽系のなにか</a>
              </li>
              <li>
               18:00 : 集合写真とか撮りたい
              </li>
              <li>
               18:00~19:00 : みんなで撤収
              </li>
            </ul>
          </CardStyle>
        </div>

        <h2>
          Member
          <br />
          Data
        </h2>
        <h3>
          現在受付けている参加者データです
          <span role="img" aria-label="hand">✌</span>
        </h3>
        <ul className="data-list">
          <li>
            <CardStyle>
              <h4>参加人数</h4>
              <p className="pre">準備中...</p>
            </CardStyle>
          </li>
          <li>
            <CardStyle>
              <h4>男女比</h4>
              <p className="pre">準備中...</p>
            </CardStyle>
          </li>
          <li>
            <CardStyle>
              <h4>Web歴</h4>
              <p className="pre">準備中...</p>
            </CardStyle>
          </li>
          <li>
            <CardStyle>
              <h4>職業分布</h4>
              <p className="pre">準備中...</p>
              {/*
                [TODO]このイメージ
                https://images.app.goo.gl/BuCu2w8DXe1ZGQpW6
               */}
            </CardStyle>
          </li>
        </ul>
        {/*
        <CardStyle paddingZero>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12969.813026393902!2d139.6862211!3d35.6412029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5eb2f0df6438ea87!2sEAT+TOKYO+JAKUZURE!5e0!3m2!1sja!2sjp!4v1560860708018!5m2!1sja!2sjp" width="292" height="180" frameBorder="0" style={{ border: 0 }} allowFullScreen />
        </CardStyle> */}
      </DetailSection>
      <FormSection id="joinform">
        <h2>JOINFORM</h2>
        {/* <Forms /> */}
        <div>
          <ul className="steps">
            <li>
              <h4>1. 運営へ連絡</h4>
              <p>
                こばしゅん(
                {' '}
                <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noopener noreferrer">Twitter</a>
                 /
                {' '}
                <a href="https://m.me/ksyunnnn" target="_blank" rel="noopener noreferrer">Facebook</a>
                {' '}
                )まで！
              </p>
              <p>
                以下を明記ください！アンケートも兼ねてます
                <span role="img" aria-label="bow">🙇</span>
              </p>
              <ul className="questionnaire">
                <li>名前</li>
                <li>性別</li>
                <li>Web歴: 未経験 / 1年未満 / 2年~4年 / 5年~</li>
                <li>職域: フロントエンド / バックエンド / デザイン / ディレクター / 学生 / その他</li>
                <li>好きな肉の部位</li>
                <li>肉に一番合うもの</li>
              </ul>
              <button
                onClick={copyToClipboard}
                type="button"
                className="copy-button"
              >
                クリップボードにコピー
                <i className="far fa-copy" />
              </button>
              <p>
                <b>連絡先</b>
                :
                {' '}
                <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noopener noreferrer">Twitter</a>
                 /
                {' '}
                <a href="https://m.me/ksyunnnn" target="_blank" rel="noopener noreferrer">Facebook</a>

              </p>
            </li>
            <li>
              <h4>2. 返信を待つ</h4>
              <p>
                2-3日以内に返信なければ、もう一度連絡ください
                <span role="img" aria-label="bow">🙇</span>
              </p>
            </li>
            <li>
              <h4>3. 参加費を払う</h4>
              <p>
                事前決済をお願いしています！
                <a href="https://twitter.com/search?q=%23meatup2019%20支払い" target="_blank" rel="noopener noreferrer">集金アプリKyash</a>
                を利用する予定です。参加費は
                <b>4,000円</b>
                です。運営からの連絡の際に、決済用のURLをお送りするので、対応いただければ幸いです！
              </p>
              <p>
                当日の支払いも対応可能ですので、ご相談ください〜！
                <span role="img" aria-label="hand">✌</span>
              </p>
            </li>
            <li>
              <h4>4. 予定をカレンダーに追加</h4>
              <p>
                下記のリンクよりカレンダーに追加できるので、ぜひご利用ください〜！
              </p>
              <a style={{ padding: '4px', marginTop: '16px', display: 'inline-block' }} target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MW5mcTlrbmJ1ZGZsYmt1dWo0MG5qczYyaW4gZnBvbGdxZ2wzYmdlcnE2NTJzaHIwaG9uc2NAZw&amp;tmsrc=fpolgqgl3bgerq652shr0honsc%40group.calendar.google.com">
Googleカレンダーに追加
                <i className="far fa-calendar-plus" />
              </a>
            </li>
            <li>
              <h4>5. 当日肉を食う！交流する！</h4>
              <p style={{ fontSize: '64px', lineHeight: '1', padding: '16px 0' }}>
                <span role="img" aria-label="niku">
                  🍖🍻🍖🍻
                </span>
              </p>
            </li>
          </ul>
        </div>
      </FormSection>
    </MainWrapper>
    <ShareSection>
      <a style={{ color: colors.orange }} href="https://twitter.com/hashtag/meatup2019" target="_blank" rel="noopener noreferrer">#meatup2019</a>
      {' '}
        ハッシュタグを使って
        イベントを盛り上げよう！
    </ShareSection>
    <Footer>
      オール準備 by
      {' '}
      <a href="https://twitter.com/hashtag/meatup2019実行委員会" target="_blank" rel="noopener noreferrer">meatup2019実行委員会</a>
    </Footer>
    <ScrollToTopButton to="/#top"><i className="fas fa-angle-double-up" /></ScrollToTopButton>
  </Layout>
);
