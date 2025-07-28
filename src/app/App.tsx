import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
