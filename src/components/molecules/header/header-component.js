import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from 'components/layout';
import OnikuImage from 'components/molecules/Images/OnikuImage';

const Header = styled.header`
  background-color: #F3F1F0;
  height: 60px;
  h2.header-title {
    font-size: 24px;
    font-family: Righteous;
  }
`;

export default () => (
  <Header>
    <h2 className="header-title">MEAT UP</h2>
  </Header>
);
