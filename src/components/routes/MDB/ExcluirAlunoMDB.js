import React from "react";

const ExcluirAlunoMDB = () => {
  // document.getElementById("res1").innerHTML="";
  const excluirAMDB = () => {
    const nomeA = document.getElementById("nome_exc_MDB").value;
    const idA = document.getElementById("id_aluno_exc_MDB").value;
    // document.getElementById("res1").innerHTML="";
    fetch(`http://localhost:4321/mongo/aluno/delaluno`, {
      method: "delete",
      body: JSON.stringify({ nome: nomeA, id: idA }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {});
    document.getElementById("nome_exc_MDB").value = "";
    document.getElementById("id_aluno_exc_MDB").value = "";
    document.getElementById("resp_exc_MDB").innerHTML = "Aluno Excluido !";
  };

  return (
    <button type="button" id="botaoEX_exc_MDB" onClick={excluirAMDB}>
      Excluir Aluno
    </button>
  );
};

export default ExcluirAlunoMDB;
