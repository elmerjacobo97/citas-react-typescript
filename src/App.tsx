import {useEffect, useState} from "react";
import {Formulario, Header, ListadoPacientes} from "./components";
import {IPaciente} from "./interfaces";
import Swal from "sweetalert2";

const App = () => {
    const [pacientes, setPacientes] = useState<IPaciente[]>(JSON.parse(localStorage.getItem('pacientes')!) || []);
    const [paciente, setPaciente] = useState<IPaciente>({
        id: "",
        name: "",
        owner: "",
        email: "",
        date: "",
        symptom: ""
    });

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])

    // Eliminar un paciente
    const deletePaciente = (id: string | undefined) => {
        Swal.fire({
            title: '',
            text: "¿Deseas eliminar este paciente?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5147e4',
            cancelButtonColor: '#db2827',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                const pacientesActualizados = pacientes.filter((pacienteState) => pacienteState.id !== id);
                setPacientes(pacientesActualizados);
                Swal.fire(
                    '',
                    'Paciente eliminado correctamente',
                    'success'
                )
            }
        })
    }

    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-10 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    deletePaciente={deletePaciente}
                />
            </div>
        </div>
    )
}

export default App
