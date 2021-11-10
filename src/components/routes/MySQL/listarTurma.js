import React, { useEffect, useState } from "react";


const ListarTurma = ()=>{
   
    const [alunos, setAlunos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    

    useEffect(()=>{
    
        fetch(`http://localhost:4321/mysql/turma/listarturma`)
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
                        {"ID : " + item.id + " - " + "Ano : " + item.ds_ano + " - " + "Classe : " + item.ds_classe + " - " + "Turno : " + item.ds_turno}
                    </li>
                ))}
            </p>
        )
    }

}

export default ListarTurma;