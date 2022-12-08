import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';
import Pacientes from "./pages/Pacientes";
import PacientesLista from "./pages/Pacientes/list";
import Home from "./pages/Home";


export default function Routes() {
    return (  
    <BrowserRouter>
        <WrapperRoutes>
            <Route path="" element={<Home/>}/>
            <Route path="/pacientes" element={<Pacientes/>}/>
            <Route path="/pacienteslista" element={<PacientesLista/>}/>
        </WrapperRoutes>
    </BrowserRouter>   
    )}