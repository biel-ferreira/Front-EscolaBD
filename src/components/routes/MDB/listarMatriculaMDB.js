import React, { useEffect, useState } from "react";


const ListarMatriculaMDB = ()=>{
   
    const [alunos, setAlunos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    

    useEffect(()=>{
    
        fetch(`http://localhost:4321/mongo/matricula/listarmatricula`)
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
                        {item.id + " - " + item.id_aluno + " - " + item.dt_matricula}
                    </li>
                ))}
            </p>
        )
    }

}

export default ListarMatriculaMDB;