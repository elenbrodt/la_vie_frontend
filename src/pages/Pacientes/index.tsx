import { Button } from "@mui/material";
import { useState } from "react";


//import Inputs from "../../components/Inputs";
import Input from "../../components/Inputs"
//import PacienteContainer from "../../components/PacienteContainer";
//import PacienteItem from "../../components/PacienteItem";
import { cadastroPaciente } from "../../services/MainApi/pacientes";
import "../Pacientes/styles.css";

function Pacientes() {
  
  const [nome, setNomePaciente] = useState<string>("");
  const [email, setEmailPaciente] = useState<string>("");
  const [idade, setIdadePaciente] = useState<string>("" );

  const cadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      nome, 
      email,
      idade,
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
      <div>
        <h1> Página de pacientes</h1>
        <form onSubmit={cadastro} >
          <Input 
            label="Nome"
            value={nome}
            placeholder="Nome do paciente" 
            onChange={(event) => setNomePaciente(event)}
          />
          <Input 
            label="Email"
            value={email}
            placeholder="Email do paciente" 
            onChange={(event) => setEmailPaciente(event)}
          />
          <Input 
            label="Idade"
            value={idade}
            placeholder="Aniversário do paciente" 
            onChange={(event) => setIdadePaciente(event)}
          />
          <Button type="submit">Enviar</Button>
        </form>

      </div>
    );
  }
  
  export default Pacientes;