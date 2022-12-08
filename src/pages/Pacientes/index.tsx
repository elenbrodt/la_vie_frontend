//import { Button } from "@mui/material";
import { useState } from "react";
import { cadastroPaciente } from "../../services/MainApi/pacientes";
import Input from "../../components/Inputs"
import Stack from 'react-bootstrap/Stack';
import { Button, Form } from "react-bootstrap";

function Pacientes() {
  
  const [nome, setNomePaciente] = useState<string>("");
  const [email, setEmailPaciente] = useState<string>("");
  const [idade, setIdadePaciente] = useState<string>("" );

  const cadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      nome, 
      email
     
    }

    try{
      const response = await cadastroPaciente(payload);

      if(response.status !== 201){
        return alert("Deu algo errado");
      }
      
      alert("Cadastro efetuado com sucesso")
    }catch (error){
      alert("Algo errado no catch")
    }
  }
  ;

    return (
      <div className="App">
        <h1> Página de pacientes </h1>
        <Stack  gap={4} className="col-md-5 mx-auto" >
          <Form onSubmit={cadastro} >
            <Input 
              label="Nome"
              value={nome}
              type="text"
              placeholder="Nome do paciente" 
              onChange={(event) => setNomePaciente(event)}
            />
            <Input 
              label="Email"
              value={email}
              type="email"
              placeholder="Email do paciente" 
              onChange={(event) => setEmailPaciente(event)}
            />
            <Input 
              label="Idade"
              value={idade}
              type="text"
              placeholder="Aniversário do paciente" 
              onChange={(event) => setIdadePaciente(event)}
            />
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
          
        </Stack>

      </div>
    );
  }
  
  export default Pacientes;