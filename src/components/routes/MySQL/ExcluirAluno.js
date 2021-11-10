import React from "react";

const ExcluirAluno = () => {
  // document.getElementById("res1").innerHTML="";
  const excluirA = () => {
    const nomeA = document.getElementById("nome_exc").value;
    const idA = document.getElementById("id_aluno_exc").value;
    // document.getElementById("res1").innerHTML="";
    fetch(`http://localhost:4321/mysql/aluno/delaluno`, {
      method: "delete",
      body: JSON.stringify({ nome: nomeA, id_aluno: idA }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {});
    document.getElementById("nome_exc").value = "";
    document.getElementById("id_aluno_exc").value = "";
    document.getElementById("resp_exc").innerHTML = "Aluno Excluido !";
  };

  return (
    <button
      type="button"
      id="botaoEX_exc"
      onClick={() => {
        excluirA();
      }}
    >
      Excluir Aluno
    </button>
  );
};

export default ExcluirAluno;
