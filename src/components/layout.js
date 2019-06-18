import React from 'react';

import '../assets/layout.css';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

export default ({ children }) => (
  <>
    <main>{children}</main>
  </>
);
