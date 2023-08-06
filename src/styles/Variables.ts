import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --color-background: #e5e5e5;

    --space-xs: 0.5rem;
    --space-s: 1rem;
    --space-m: 1.5rem;
    --space-l: 2rem;
    --space-xl: 4rem;
    --space-xxl: 8rem;
  }
`;

export default Variables;
