import { AppBar, Typography } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import {SideMenu} from './shared/components/index.ts'
import {Form} from './shared/components/index.ts'


function App() {
  return (
    <BrowserRouter>
    <SideMenu>
    <AppRoutes/>
    </SideMenu>
    <Form></Form>
    </BrowserRouter>
  )
}
export default App
