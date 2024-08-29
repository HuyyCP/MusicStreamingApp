import { blue, cyan, orange, pink, purple, red, teal, yellow } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    secondary1: Palette['primary']
    secondary2: Palette['primary']
    secondary3: Palette['primary']
    secondary4: Palette['primary']
    neutral: {
      neutral1: string
      neutral2: string
      neutral3: string
    }
    other: {
      cyan400: string
      blue400: string
      purple400: string
      pink400: string
      red400: string
      orange400: string
      yellow400: string
      teal400: string
    }
    gradient: {
      gradient1: string
      gradient2: string
      gradient3: string
      gradient4: string
      gradient5: string
      gradient6: string
      gradient7: string
    }
  }

  interface PaletteOptions {
    secondary1: PaletteOptions['primary']
    secondary2: PaletteOptions['primary']
    secondary3: PaletteOptions['primary']
    secondary4: PaletteOptions['primary']
    neutral: {
      neutral1: string
      neutral2: string
      neutral3: string
    }
    other: {
      cyan400: string
      blue400: string
      purple400: string
      pink400: string
      red400: string
      orange400: string
      yellow400: string
      teal400: string
    }
    gradient: {
      gradient1: string
      gradient2: string
      gradient3: string
      gradient4: string
      gradient5: string
      gradient6: string
      gradient7: string
    }
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    music: {
      appBarHeight: string
      appBodyHeight: string
      appTrackHeight: string
    }
  }
  interface ThemeOptions {
    music: {
      appBarHeight: string
      appBodyHeight: string
      appTrackHeight: string
    }
  }
}

const appBarHeight = '50px'
const appTrackHeight = '75px'
const appBodyHeight = `calc(100vh - ${appBarHeight} - ${appTrackHeight})`

const theme = createTheme({
  music: {
    appBarHeight,
    appBodyHeight,
    appTrackHeight
  },
  palette: {
    primary: {
      main: '#1db954'
    },
    secondary1: {
      main: '#000000'
    },
    secondary2: {
      main: '#393939'
    },
    secondary3: {
      main: '#3a433e'
    },
    secondary4: {
      main: '#ffffff'
    },
    neutral: {
      neutral1: '#b3b3b3',
      neutral2: '#777777',
      neutral3: '#535353'
    },
    other: {
      cyan400: cyan[400],
      blue400: blue[400],
      purple400: purple[400],
      pink400: pink[400],
      red400: red[400],
      orange400: orange[400],
      yellow400: yellow[400],
      teal400: teal[400]
    },
    gradient: {
      gradient1: 'linear-gradient(90deg, #3DD5F3 0%, #3D8BFD 100%)',
      gradient2: 'linear-gradient(90deg, #3D8BFD 0%, #8C68CD 100%)',
      gradient3: 'linear-gradient(90deg, #8C68CD 0%, #DE5C9D 100%)',
      gradient4: 'linear-gradient(90deg, #DE5C9D 0%, #E35D6A 100%)',
      gradient5: 'linear-gradient(90deg, #E35D6A 0%, #FD9843 100%)',
      gradient6: 'linear-gradient(90deg, #FD9843 0%, #4DD4AC 100%)',
      gradient7: 'linear-gradient(90deg, #1DB954 0%, #4DD4AC 100%)'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          'textTransform': 'none',
          'borderRadius': 20,
          'padding': '8px 24px',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        },
        contained: ({ theme }) => ({
          'background': theme.palette.primary.main,
          'color': theme.palette.secondary1.main,
          '&:hover': {
            background: theme.palette.primary.main
          }
        }),
        containedSecondary: ({ theme }) => ({
          'background': theme.palette.secondary4.main,
          'color': theme.palette.secondary1.main,
          'border': 'none',
          '&:hover': {
            background: theme.palette.secondary4.main,
            border: 'none'
          }
        }),
        outlined: ({ theme }) => ({
          'background': 'inherit',
          'color': theme.palette.secondary4.main,
          'borderColor': theme.palette.secondary4.main,
          '&:hover': {
            background: 'inherit',
            border: `2px solid ${theme.palette.secondary4.main}`
          }
        }),
        text: ({ theme }) => ({
          color: theme.palette.secondary4.main
        })
      }
    }
  }
})

export default theme
