import { ThemeProvider } from "@emotion/react";

const tema= {
  cores: {
    branco: '#ffffff',
    atencao: '#ff0e0e',
    focus: '#b009ff',
    primarias: {
      a: '#5754ED',
      b: '#d93114',
      c: '#168070',
    },
    secundarias: {
      a: '#EBEAF9',
      b: '#fdf8f8',
      c: '#ebfcf9',
    },
    neutras: {
      a: '#373737',
      b: '#e8e8e8',
      c: '#f5f5f5',
    },
    dark: {
      a: '#110ea0',
      b: '#d93114',
    }
  },
  espacamentos: {
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
  },
  fontFamily: "'Montserrat', sans-serif"
}

// eslint-disable-next-line react/prop-types
export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{ children }</ThemeProvider>
}