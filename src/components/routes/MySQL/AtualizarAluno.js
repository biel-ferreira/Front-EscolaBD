import React from "react";

const AtualizarAluno = () => {
  const Atualizar = () => {
    let nomeA = document.getElementById("nome_att").value;
    let idA = document.getElementById("id_aluno_att").value;
    // document.getElementById("res1").innerHTML="";
    fetch(`http://localhost:4321/mysql/aluno/upaluno`, {
      method: "put",
      body: JSON.stringify({ nome: nomeA, id_aluno: idA }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {});
    document.getElementById("nome_att").value = "";
    document.getElementById("id_aluno_att").value = "";
    document.getElementById("resp_att").innerHTML = "Aluno Atualizado !";
  };

  return (
    <button type="button" id="botaoMT_att" onClick={Atualizar}>
      Mudar Nome
    </button>
  );
};

export default AtualizarAluno;
