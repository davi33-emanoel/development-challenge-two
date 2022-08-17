import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { SideMenu } from '../side-menu/SideMenu';

function createData(
  nome: string,
  aniversario: Date,
  email: String,
  endereco: String,
  actions: String
) {
  return { nome, aniversario, email, endereco, actions };
}

const rows = [
  createData('Davi Emannoel Lopeeqweqwewqeqwqwewqeqweewdasdasdasdsadasdasdqeqweqweqweqweeqweqweqwewqeqwqwqweqwewqeqweqweqweqweqwewqeqweqweqweweqwewqeqwewqeqwewqewqeqweqweqweqwewqqweqwewqes de Souza',new Date(1995,11,17), 'emanoeldavi3333qweqwewqeqwqwqweqwewqeqweqweqweqweqwewqe348@gmail.com', "Rua:balallaallala numero:20 cidade:acreaaaaaasasasasasasasasRua:balallaallala numero:20 cidade:acreaaaaaasasasasasasasasRua:balallaallala numero:20 cidade:acreaaaaaasasasasasasasasRua:balallaallala numero:20 cidade:acreaaaaaasasasasasasasasRua:balallaallala numero:20 cidade:acreaaaaaasasasasasasasas",''),
  createData('Ice cream sandwich',new Date(1995,11,17),'example@email.com', "Rua:balallaallala numero:20 cidade:acre",''),
  createData('Eclair',new Date(1995,11,17),'example@email.com', "Rua:balallaallala numero:20 cidade:acre",''),
  createData('Cupcake',new Date(1995,11,17), 'example@email.com', "Rua:balallaallala numero:20 cidade:acre",''),
  createData('Gingerbread',new Date(1995,11,17), 'example@email.com', "Rua:balallaallala numero:20 cidade:acre",''),
];

export const DataTable= () => {
  return (
    <>
    <SideMenu></SideMenu>
    <TableContainer component={Paper} sx={{marginTop:"30px", width:990,backgroundColor:"rgba(255,255,255,1)", borderRadius:"10px",
    boxShadow:"0px -5px 15px rgba(255,255,255,0.8)", marginLeft:"150px"}}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="inherit">Nome</TableCell>
            <TableCell align="inherit">Aniversario</TableCell>
            <TableCell align="inherit">Email</TableCell>
            <TableCell align="inherit">Edereço</TableCell>
            <TableCell align="inherit">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{width:200,wordBreak:'break-word'}} >
                {row.nome}
              </TableCell>
              <TableCell align="inherit" sx={{width:79,wordBreak:'break-word'}}>{row.aniversario.toLocaleDateString()}</TableCell>
              <TableCell align="inherit" sx={{width:220,wordBreak:'break-word'}}>{row.email}</TableCell>
              <TableCell align="inherit"sx={{width:200, wordBreak:'break-word'}}>{row.endereco}</TableCell>
              <TableCell align="inherit" sx={{width:80,wordBreak:'break-word'}}>{row.actions}<IconButton  sx={{color:'#0094e0'}} contentEditable={true}><EditIcon></EditIcon></IconButton><IconButton sx={{color:'#0094e0'}}><DeleteIcon></DeleteIcon></IconButton></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
