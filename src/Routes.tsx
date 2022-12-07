import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Pacientes from "./pages/Pacientes";
import PacientesLista from "./pages/Pacientes/list";


export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="/pacientes" element={<Pacientes/>}/>
            <Route path="/pacienteslista" element={<PacientesLista/>}/>
        </WrapperRoutes>
    </BrowserRouter>   
    )}