import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import {Home} from './shared/components/index.js'

function App() {
  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}
export default App
