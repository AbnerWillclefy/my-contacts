import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.title};

    transition: background 0.2s;
  }

  input {
    color: ${({ theme }) => theme.colors.title};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  button {
    cursor: pointer;
  }
`;
