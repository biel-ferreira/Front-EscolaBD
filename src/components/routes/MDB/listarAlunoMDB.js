import React, { useState, useEffect } from "react";

const ListarAlunoMDB = () => {
  const [alunos, setAlunos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://localhost:4321/mongo/aluno/listaraluno`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAlunos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <p>
        {alunos.map((item) => (
          <li key={item.id}>{"Nome : " + item.nome + " - " +" ID : " + item._id}</li>
        ))}
      </p>
    );
  }
};

export default ListarAlunoMDB;
