import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  h1 {
      margin-bottom: 24px;
  }
  p {
      margin: 1em 0;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <div>
        <h1>ACCESS</h1>
        <p>
          準備中です！
          <span role="img" aria-label="hand">✌</span>
          <br />
          駅から少し離れているので、その行き方を記載する予定。
          <br />
          池尻大橋駅、中目黒駅、祐天寺駅からそれぞれ10分くらいの距離みたいです。
          <br />
          タクシーだとワンメーターなのでおすすめ。
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/NX273kTyHT5NrSvF8">
            東京都目黒区上目黒5-30-12
          </a>

        </p>
        <p>
          <br />
          <Link to="/">戻る</Link>
        </p>

      </div>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
