import { Item } from "./styles";

interface PacienteItemProps {
    nome: string;
    email: string;
    idade: any;
    key:number;
}

export default function PacienteItem(props: PacienteItemProps) {
    return (
      <Item key={props.key}>
        <p>{props.nome} {props.email} {props.idade}</p>
      </Item>
    );
  }