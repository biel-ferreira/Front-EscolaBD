import React from "react";

const AtualizarAlunoMDB = () => {
  const AttalunoMDB = () => {
    const nomeA = document.getElementById("nome_att_MDB").value;
    const idA = document.getElementById("id_aluno_att_MDB").value;

    fetch(`http://localhost:4321/mongo/aluno/upaluno`, {
      method: "put",
      body: JSON.stringify({ id: idA, novonome: nomeA }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {});
    document.getElementById("nome_att_MDB").value = "";
    document.getElementById("id_aluno_att_MDB").value = "";
    document.getElementById("resp_att_MDB").innerHTML = "Aluno Atualizado !";
  };
  return (
    <button type="button" id="botaoMT_att_MDB" onClick={AttalunoMDB}>
      Mudar Nome
    </button>
  );
};

export default AtualizarAlunoMDB;
