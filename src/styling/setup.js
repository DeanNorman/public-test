import { createGlobalStyle } from 'styled-components';

import reset from './reset-css';
import fonts from './fonts';
import theme from './theme';

/**
 * Sets up any styling and themes.
 *
 * @export
 */
const GlobalStyle = createGlobalStyle`
   ${reset}
   ${fonts}
   ${theme}
`;

export default GlobalStyle;
