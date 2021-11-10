import React, { useEffect, useState } from "react";


const ListarMatricula = ()=>{
   
    const [alunos, setAlunos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    

    useEffect(()=>{
    
        fetch(`http://localhost:4321/mysql/matricula/listarmatricula`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setAlunos(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error) {
        return <div>Error : {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <p>
                {alunos.map(item => (
                    <li key={item.id}>
                        {"ID : " +item.id + " - " + "ID do Aluno : " + item.id_aluno + " - " + "Data da Matricula : " + item.dt_matricula}
                    </li>
                ))}
            </p>
        )
    }

}

export default ListarMatricula;