import baseApi from "./config"

interface PacientePayload {
    nome: string;
    email: string;
    idade: string;
}

export function cadastroPaciente(payload: PacientePayload) {
    return baseApi.post('/pacientes', payload)
}

export function listarPaciente(){
    return baseApi.get('/pacientes')
}