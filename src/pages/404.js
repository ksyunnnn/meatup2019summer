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
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Wrapper>
      <div>
        <h1>404 NOT FOUND</h1>
        <p>
ページが見つかりません
          <span role="img" aria-label="niku sweat">🍖💦</span>
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
