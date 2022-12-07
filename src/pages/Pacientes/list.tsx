import {useEffect, useState} from "react";
import { listarPaciente } from "../../services/MainApi/pacientes";

interface Paciente {
    nome:string;
    email: string;
    idade: string;
}

export default function PacienteList() {
    const [pacientes, setPacientes] =useState<Paciente[]>([]);

    useEffect(()=>{
        const getData = async () =>{
            try {
                const response = await listarPaciente();
                setPacientes(response.data);
            } catch (error) {
                alert("Deu algo errado no catch")
            }
            
        }
        getData();
    }, [setPacientes])
    return (
        <div>
            <h1>Lista de Pacientes</h1>
            <ul className="paciente-list">
                {pacientes.map((paciente, index) => (
                    <li key={index}>{paciente.nome} | {paciente.email} | {paciente.idade}</li>
                ))
           }
            </ul>
        </div>
    )
}