
import Form from 'react-bootstrap/Form'; 
import { Title } from './styles';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function Inputs(props: Props) {

  return (
      <Form.Group  controlId="formInput" className="d-flex align-center gap-2">
        <Form.Label><Title>{props.label}</Title></Form.Label>
        <Form.Control className="w-80" placeholder={props.placeholder} type="text" value={props.value} onChange={(e)=>{props.onChange(e.target.value)}}/>
      </Form.Group> 
  );
}

export default Inputs;
