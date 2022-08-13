import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
  } from "@mui/material";
  import * as React from "react";
  export const Form: React.FC = () => {
    return (
     <div style={{marginTop:"130px", display:"flex",alignItems:"center", 
     flexFlow:"wrap",justifyContent:"space-between",
     width:"55%",marginLeft:"250px",
     padding:"10px",gap:"25px",backgroundColor:"rgba(255,255,255,0.9)", borderRadius:"10px",
     boxShadow:"0px -5px 15px rgba(255,255,255,0.8)"}}>
        <Typography variant="h5" sx={{color:"black",marginLeft:"250px"}}>Cadastrar novo Usuario</Typography>
        <form style={{display:"flex",alignItems:"center", 
                      flexFlow:"wrap",justifyContent:"space-between",gap:"10px"
                      }}>
          <TextField
            style={{ width: "350px", margin: "5px"}}
            type="text"
            label="Nome"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "350px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: "350px", margin: "5px" }}
            type="date"
            defaultValue={"1995-02-03"}
            label="Aniversário"
            variant="outlined"
          />
          <br />
          <TextField 
            style={{ width: "350px", margin: "5px" }}
            type="text"
            label="Endereço"
            variant="outlined"
          />
          <br />
          <Button variant="contained" color="primary">
            Enviar Dados
          </Button>
        </form>
      </div>
    );
  }
  