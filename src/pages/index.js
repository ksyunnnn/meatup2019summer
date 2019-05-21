import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import OnikuImage from '../components/OnikuImage';
import SEO from '../components/seo';

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* pennging
  .year {
    background: #FF6500;
    font-size: 85px;
    line-height: 119.8%;
    letter-spacing: -1.7px;

    color: #FFFFFF;
  } */
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <MainWrapper>
      <div className="contents">
        {/* pennding
        <span className="year">2019</span>
        <span className="season">REIWA SUMMER</span>
        <span className="oniku"><OnikuImage /></span>
        <h1>MEATUP</h1> */}
        <a href="https://twitter.com/hashtag/meatup2019" target="_blank" rel="noopener noreferrer">
#meatup2019
          <i className="fas fa-external-link-alt" style={{ marginLeft: '4px' }} />
        </a>
        <OnikuImage />
        <div style={{ textAlign: 'center', fontSize: '14px', letterSpacing: '4px' }}>
        準備中です
          <span role="img" aria-label="bow">🙇</span>
        </div>
      </div>
    </MainWrapper>
  </Layout>
);
