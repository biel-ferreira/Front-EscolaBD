import React from "react";

const CriarAlunoMDB = () => {
  // document.getElementById("res1").innerHTML="";
  const cadastrarMDB = async () => {
    document.getElementById("resp_mat_MDB").innerHTML = "";
    const nomeA = document.getElementById("nome_mat_MDB").value;

    // document.getElementById("res1").innerHTML="";
    await fetch(`http://localhost:4321/mongo/aluno/criaraluno`, {
      method: "post",
      body: JSON.stringify({ nome: nomeA }),
      headers: { "Content-type": "application/json" },
    });

    document.getElementById("nome_mat_MDB").value = "";
    document.getElementById("resp_mat_MDB").innerHTML = "Aluno Cadastrado !";
  };
  return (
    <div>
      <button
        id="botaoM_mat_MDB"
        onClick={() => {
          cadastrarMDB();
        }}
      >
        Criar Aluno
      </button>
    </div>
  );
};

export default CriarAlunoMDB;
