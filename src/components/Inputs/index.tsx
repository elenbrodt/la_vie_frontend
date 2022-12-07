
import { InputLabel, Input } from '@mui/material';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function Inputs(props: Props) {

  return (
    <div className="container-form">
        <InputLabel>{props.label}</InputLabel>
        <Input
            required
            id="outlined-required"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>{props.onChange(e.target.value)}}
        />
    </div>
  );
}

export default Inputs;
