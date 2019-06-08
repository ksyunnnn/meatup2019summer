import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import OnikuImage from '../components/molecules/Images/OnikuImage';
import SEO from '../components/seo';

const orange = '#FF6500';

const MainWrapper = styled.div`
  padding-bottom: 176px;
`;

const HeroSection = styled.section`
  padding-top: 80px;
  padding-bottom: 110px;
  text-align: center;
  h3 {
    font-size: 16px;
    margin-bottom: 40px;
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
    background: ${orange};
    color: #fff;
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
        color: ${orange};
       }
    }
  }
  .button-wrapper {
    display: grid;
    row-gap: 8px;
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  width: 300px;
  height: 48px;
  color: ${props => props.orange && orange};
  font-weight: 800;
  border: 3px solid;
  border-radius: 24px;
  background: #FFFFFF;
  font-size: 16px;
  :active {
    background: #eee;
  }
`;

const DetailSection = styled.section`
  background: #F8F8F8;
  padding-top: 74px;
  text-align: center;
  h2 {
    font-size: 40px;
    text-transform: uppercase;
  }
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <MainWrapper>
      <HeroSection>
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
          <span>2019.07.20(Sat.)</span>
          <span>11:00 open ~ 19:00 close </span>
          <span className="place">
            <i className="fas fa-map-marker-alt" />
            EAT TOKYO STUDIO JAX
          </span>
        </div>
        <div className="button-wrapper">
          <StyledButton orange onClick={() => console.log('hoge')}>
            <i className="fas fa-angle-double-down" style={{ marginRight: '8px' }} />
            はよ参加登録させてくれ
          </StyledButton>
          <StyledButton onClick={() => console.log('hoge')}>
            <i className="fas fa-angle-double-down" style={{ marginRight: '8px' }} />
            まずは内容を見せて欲しい
          </StyledButton>
        </div>
      </HeroSection>

      <DetailSection>
        <h2>About MEATUP</h2>
        <p>肉を通してわいがや交流するイベントです</p>
      </DetailSection>
    </MainWrapper>
  </Layout>
);
