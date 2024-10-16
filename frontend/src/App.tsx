import Box from '@mui/material/Box'
import Main from './page/Client/Main/MainLayout'

function App() {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        width: '100%',
        height: '100vh',
        p: 1,
        overflowY: 'hidden',
        overflowX: 'auto'
      }}
    >
      <Main />
    </Box>
  )
}

export default App
