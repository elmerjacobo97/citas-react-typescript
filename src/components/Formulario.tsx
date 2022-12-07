import {FC, FormEvent, useEffect, useState} from "react";
import Swal from 'sweetalert2';
import {IPaciente} from "../interfaces";
import {generateId} from "../helpers";

interface Props {
    paciente: IPaciente;
    pacientes: IPaciente[];
    setPacientes: (pacientes: IPaciente[]) => void;
    setPaciente: (paciente: IPaciente) => void;
}
export const Formulario: FC<Props> = ({  pacientes, setPacientes, paciente, setPaciente }) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');

    useEffect(() => {
        setName(paciente.name);
        setOwner(paciente.owner);
        setEmail(paciente.email);
        setDate(paciente.date);
        setSymptom(paciente.symptom);
    }, [paciente])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // Validación todos los campos
        if ([name, owner, email, date, symptom].includes('')) {
            Swal.fire({
                title: '',
                text: "Todos los campos son obligatorios",
                icon: 'warning',
                confirmButtonColor: '#5147e4',
                confirmButtonText: 'Aceptar'
            })
            return;
        }

        // Validar el email
        if (!regex.test(email)) {
            Swal.fire({
                title: '',
                text: "El email no parece ser válido",
                icon: 'warning',
                confirmButtonColor: '#5147e4',
                confirmButtonText: 'Aceptar'
            })
            return;
        }

        // Crear un objeto del paciente
        const objPaciente = {
            name,
            owner,
            email,
            date,
            symptom,
            id: '',
        }

        if (paciente.id) {
            // Editando el registro
            objPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objPaciente : pacienteState)
            setPacientes(pacientesActualizados);

            Swal.fire({
                title: '',
                text: "Paciente actualizado correctamente",
                icon: 'success',
                confirmButtonColor: '#5147e4',
                confirmButtonText: 'Aceptar'
            })

            setPaciente({
                id:"",
                name: "",
                owner: "",
                email: "",
                date: "",
                symptom: ""
            });
        } else {
            // Agregar paciente
            objPaciente.id = generateId();
            setPacientes([...pacientes, objPaciente]);
            Swal.fire({
                title: '',
                text: "Paciente agregado correctamente",
                icon: 'success',
                confirmButtonColor: '#5147e4',
                confirmButtonText: 'Aceptar'
            })
        }

        // Reiniciar el formulario
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptom('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-2xl text-center mt-10 md:mt-0">Seguimiento Pacientes</h2>

            <p className="font-bold my-5 text-center">
                Añade pacientes y {''}
                <span className="text-indigo-600">administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-md py-10 px-5 animate__animated animate__fadeIn mb-5 mx-5'
                noValidate
            >
                <div className='mb-2'>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 font-bold'
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition'
                        placeholder='Nombre de la mascota'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 font-bold'
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type='text'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition duration-300'
                        placeholder='Nombre del propietario'
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 font-bold'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition'
                        placeholder='Email de contacto'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='fecha'
                        className='block text-gray-700 font-bold'
                    >
                        Fecha de Alta
                    </label>
                    <input
                        id='fecha'
                        type='date'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='symptom'
                        className='block text-gray-700 font-bold'
                    >
                        Síntomas
                    </label>
                    <textarea
                        id='symptom'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600
                        transition'
                        placeholder='Describe los síntomas'
                        value={symptom}
                        onChange={(event) => setSymptom(event.target.value)}
                    ></textarea>
                </div>

                <button
                    type='submit'
                    className='bg-indigo-600 w-full px-3 py-2 text-white uppercase font-bold rounded-md hover:bg-indigo-700
                    transition'
                >
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                </button>
            </form>
        </div>
    );
};
