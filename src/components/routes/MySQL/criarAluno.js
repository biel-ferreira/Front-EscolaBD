import React from "react";

const CriarAluno = () => {
  // document.getElementById("res1").innerHTML="";
  const cadastrar = async () => {
    document.getElementById("resp").innerHTML = "";
    let nomeA = document.getElementById("nome").value;
    const response = await fetch(
      `http://localhost:4321/mysql/aluno/criaraluno`,
      {
        method: "post",
        body: JSON.stringify({ nome: nomeA }),
        headers: { "Content-type": "application/json" },
      }
    );
    const resposta = await response.json();

    const idturma = document.getElementById("turma").value;

    const matricularesponse = await fetch(
      `http://localhost:4321/mysql/matricula/criarmatricula`,
      {
        method: "post",
        body: JSON.stringify({
          id_aluno: resposta.id,
          id_turma: idturma,
        }),
        headers: { "Content-type": "application/json" },
      }
    );
    console.log(matricularesponse);
    document.getElementById("nome").value = "";
    document.getElementById("turma").value = "";
    document.getElementById("turma").value = "";
    document.getElementById("resp").innerHTML = "Aluno Cadastrado !";
  };
  return (
    <div>
      <button
        id="botaoM"
        onClick={() => {
          cadastrar();
        }}
      >
        Criar Aluno
      </button>
    </div>
  );
};

export default CriarAluno;
