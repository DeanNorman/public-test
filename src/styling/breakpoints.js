import { css } from 'styled-components';


export default {
   xs: (...args) => (
      css`
         @media (max-width: 480px) {
            ${(args)}
         }
      `
   ),
   sm: (...args) => (
      css`
         @media (min-width: 481px) {
            ${(args)}
         }
      `
   ),
   md: (...args) => (
      css`
         @media (min-width: 768px) {
            ${(args)}
         }
      `
   ),
   mdMax: (...args) => (
      css`
         @media (max-width: 767px) {
            ${(args)}
         }
      `
   ),
   lg: (...args) => (
      css`
         @media (min-width: 992px) {
            ${(args)}
         }
      `
   ),
   xl: (...args) => (
      css`
         @media (min-width: 1200px) {
            ${(args)}
         }
      `
   ),

   xxl: (...args) => (
      css`
         @media (min-width: 1400px) {
            ${(args)}
         }
      `
   ),
   custom: width => (...args) => (
      css`
         @media (min-width: ${width}px) {
            ${(args)}
         }
      `
   ),
};
