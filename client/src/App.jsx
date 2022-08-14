import { AppBar, Typography } from '@mui/material';
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import {SideMenu} from './shared/components/index.ts'
import {Form} from './shared/components/index.ts'
import {DataTable} from './shared/components/list/List'


function App() {
  return (
    <BrowserRouter>
    <SideMenu>
    <AppRoutes/>
    </SideMenu>
    <DataTable></DataTable>
    </BrowserRouter>
  )
}
export default App
