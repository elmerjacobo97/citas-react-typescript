import {FC} from "react";
import {IPaciente} from "../interfaces";

interface Props {
    paciente: IPaciente;
    setPaciente: (paciente: IPaciente) => void;
    deletePaciente: (id: string | undefined) => void;
}

export const Paciente: FC<Props> = ({ paciente, setPaciente, deletePaciente }) => {
    const { name, date, owner, symptom, email, id } = paciente;

    return (
        <div className="bg-white shadow-md rounded-md mx-5 py-10 px-5 animate__animated animate__fadeIn mb-5">
            <p className="font-bold text-gray-700 mb-1">
                Nombre: {''}
                <span className="font-normal">{name}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Propietario: {''}
                <span className='font-normal'>{owner}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Email: {''}
                <span className='font-normal'>{email}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Fecha de Alta: {''}
                <span className='font-normal'>{date}</span>
            </p>
            <p className='font-bold text-gray-700'>
                Síntomas: {''}
                <span className='font-normal'>{symptom}</span>
            </p>

            <div className='flex justify-between md:justify-around items-center mt-5'>
                <button
                    type='button'
                    className='px-3 py-2 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-bold
                    rounded-md shadow-md flex gap-1 items-center'
                    onClick={() => setPaciente(paciente)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                        />
                    </svg>
                    Editar
                </button>

                <button
                    type='button'
                    className='px-3 py-2 bg-red-600 hover:bg-red-700 transition duration-300 text-white font-bold
                    rounded-md shadow-md flex gap-1 items-center'
                    onClick={() => deletePaciente(id)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
                              4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    );
};
