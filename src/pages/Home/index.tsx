import { Stack } from "react-bootstrap";

function Home (){
    return (
        <div className="App">
            <Stack  gap={4} className="col-md-5 mx-auto">
                <h1>Home</h1>
                <p>/pacientes para cadastrar pacientes</p>
                <p>/pacienteslista para ver a lista de pacientes</p>
            </Stack>
            
        </div>

    )
}
export default Home;