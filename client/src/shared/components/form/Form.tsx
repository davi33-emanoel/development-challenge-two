import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
  } from "@mui/material";
  import * as React from "react";
import { useRef, useState } from "react";
import { Route } from "react-router-dom";
import { SideMenu } from "../side-menu/SideMenu";

  const btn = document.querySelector("#send");
  btn?.addEventListener("click", function(e){
    e.preventDefault();
  })
  
  export const Form = () => {
   
    const [nome, setNome]= useState('')
    const [nomeErro, setNomeErro]= useState(false)
    const [nomeErroTexto, setNomeErroTexto]= useState('')
    
    const [aniversario, setAniversario]= useState('')

    const [email, setEmail]= useState('')
    const [emailErro, setEmailErro]= useState(false)
    const [emailErroTexto, setEmailErroTexto]= useState('')

    const [endereco, setEndereco]= useState('')
    const [enderecoErro, setEnderecoErro]= useState(false)
    const [enderecoErroTexto, setEnderecoErroTexto]= useState('')

    const att = () =>{
      window.location.reload()
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(nome.length < 8){
        setNomeErro(true)
        setNomeErroTexto("Por favor digite seu nome completo")
        return
      }else{
        setNomeErro(false)
        setNomeErroTexto('')
      }

      if(!email.includes(".com")){
        setEmailErro(true)
        setEmailErroTexto("Por favor digite um email valido")
        return
      }else{
        setEmailErro(false)
        setEmailErroTexto('')
      }

      if(endereco.length < 40){
        setEnderecoErro(true)
        setEnderecoErroTexto("Por favor digite seu endereço completo")
        return
      }else{
        setEnderecoErro(false)
        setEnderecoErroTexto('')
      }
      if(nome.length > 8 && email.includes(".com") && endereco.length > 40 && aniversario.length > 0){
        console.log(nome, aniversario, endereco, email)
        setTimeout(att, 1000)
        return
      }
    }
    return (
      <>
      <SideMenu></SideMenu>
     <div style={{marginTop:"20px", display:"flex",alignItems:"center", 
     flexFlow:"wrap",justifyContent:"space-between",
     width:"60%",marginLeft:"250px",
     padding:"10px",gap:"25px",backgroundColor:"rgba(255,255,255,1)", borderRadius:"10px",
     boxShadow:"0px -5px 15px rgba(255,255,255,0.8)"}}>
        <Typography variant="h5" sx={{color:"black",marginLeft:"250px"}}>Cadastrar novo Usuário</Typography>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center", 
                      flexFlow:"wrap",justifyContent:"space-between",gap:"10px"
                      }} autoComplete="off">
          <TextField
            required
            error={nomeErro}
            helperText={nomeErroTexto}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: "350px", margin: "5px"}}
            type="text"
            label="Nome completo"
            variant="outlined"
          />
          <br />
          <TextField
          required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "350px", margin: "5px" }}
            type="email"
            label="Email"
            variant="outlined"
            error={emailErro}
            helperText={emailErroTexto}
          />
          <br />
          <TextField
            required
            onChange={(e) => setAniversario(e.target.value)}
            style={{ width: "350px", margin: "5px" }}
            type="date"
            label="Aniversário"
            variant="outlined"
          />
          <br />
          <TextField
            required
            onChange={(e) => setEndereco(e.target.value)} 
            style={{ width: "350px", margin: "5px", wordBreak:"break-word"}}
            type="text"
            label="Endereço Completo"
            rows={2}
            multiline={true}
            variant="outlined"
            error={enderecoErro}
            helperText={enderecoErroTexto}
          />
          <br />
          <Button variant="contained" type="submit" color="primary">
            Enviar Dados
          </Button>
        </form>
      </div>
      </>
    );
  }
  