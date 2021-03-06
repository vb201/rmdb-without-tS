import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --black: #000;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontXL: 2.5rem;
    --fontL: 1.5rem;
    --fontM: 1.2rem;
    --fontS: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }


  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1 rem;
      font-weight: 600;
    }

    p {
      font-size: 1 rem;
      color: var(--white)
    }
  }
`;
