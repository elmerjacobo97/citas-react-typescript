import {FC} from "react";
import {Paciente} from "./Paciente";
import {IPaciente} from "../interfaces";

interface Props {
    pacientes: IPaciente[];
    setPaciente: (paciente: IPaciente) => void;
    deletePaciente: (id: string | undefined) => void;
}

export const ListadoPacientes: FC<Props> = ({ pacientes, setPaciente,deletePaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll pb-5">
            {
                pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-2xl text-center mt-10 md:mt-0">
                            Listado Pacientes
                        </h2>

                        <p className="font-bold my-5 text-center">
                            Agrega tus {''}
                            <span className="text-indigo-600">
                                pacientes y citas
                            </span>
                        </p>

                        {
                            pacientes.map((paciente) => (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    deletePaciente={deletePaciente}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-2xl text-center mt-10 md:mt-0">
                            No hay pacientes
                        </h2>

                        <p className="font-bold my-5 text-center">
                            Comienza agregando pacientes {''}
                            <span className="text-indigo-600">
                                y aparecerán en este lugar
                            </span>
                        </p>
                    </>
                )
            }
        </div>
    );
};
