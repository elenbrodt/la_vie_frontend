interface PacienteContainerProps {
    children: JSX.Element | JSX.Element[];
}

export default function PacienteContainer(props: PacienteContainerProps) {
    return <ul className="paciente-list">{props.children}</ul>
}