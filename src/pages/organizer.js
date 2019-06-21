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
      margin: 1.7em 0;

  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="ORGANIZER" />
    <Wrapper>
      <div>
        <h1>ORGANIZER</h1>
        <p>
          主催
          <br />
          <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noopener noreferrer">こばしゅん</a>
          <br />
          <br />
          クリエイティブ全般
          <br />
          <a href="https://twitter.com/nanammeon" target="_blank" rel="noopener noreferrer">@nanammeon</a>
          /
          <a href="https://twitter.com/nuxt_suco" target="_blank" rel="noopener noreferrer">@nuxt_suco</a>
          /
          <a href="https://twitter.com/wwweric" target="_blank" rel="noopener noreferrer">@wwweric</a>
          /
          <a href="https://twitter.com/9almondchocola" target="_blank" rel="noopener noreferrer">@9almondchocola</a>
          <br />
          <br />
          お肉企画(絶賛協議中)
          <br />
          <a href="https://twitter.com/yuuki_script" target="_blank" rel="noopener noreferrer">@yuuki_script</a>
          /
          <a href="https://twitter.com/murokaco" target="_blank" rel="noopener noreferrer">@murokaco</a>
          /
          <a href="https://twitter.com/nerd0geek1" target="_blank" rel="noopener noreferrer">@nerd0geek1</a>
          /
          <a href="https://twitter.com/nuxt_suco" target="_blank" rel="noopener noreferrer">@nuxt_suco</a>
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
