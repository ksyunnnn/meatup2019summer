import { css } from 'styled-components';

export const sizes = {
  mobile: 768,
  desktop: 1180,
};

const desktop = args => css`
  @media screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.desktop}px) {
    ${args}
  }
`;

const mobile = args => css`
  @media screen and (max-width: ${sizes.mobile}px) {
    ${args}
  }
`;
export default {
  desktop,
  mobile,
};
