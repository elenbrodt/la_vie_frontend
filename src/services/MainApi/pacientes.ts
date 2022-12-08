import baseApi from "./config"

interface PacientePayload {
    nome: string;
    email: string;
}

export function cadastroPaciente(payload: PacientePayload) {
    return baseApi.post('/paciente/criar', payload)
}

export function listarPaciente(){
    return baseApi.get('/pacientes')
}