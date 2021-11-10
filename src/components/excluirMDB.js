import React, { useState } from "react";

import ExcluirAluno from "./routes/MDB/ExcluirAlunoMDB";
import ListarAlunoMDB from "./routes/MDB/listarAlunoMDB";


const ExcluirMDB = () => {
    const [execucaoA, setExecucaoA] = useState(false);

    const MostrarAluno = () =>{
        setExecucaoA(true)
        
    }

    return (
        <div id = "exc_MDB">
        <div id = "conteudo1_exc_MDB">
            <div className = "conteudo2_exc_MDB">
                <p className = "titulo_exc_MDB" type = "text">MongoDB - Excluir</p>
                <p className = "texto1_exc_MDB">Nome do Aluno :
                    <input type="text" id="nome_exc_MDB" name="dados"></input> ID :  <input type="text" id="id_aluno_exc_MDB" name="dados"></input>
                </p>
               
                <p className = "texto3_exc_MDB" type = "text">
                    <ExcluirAluno/>
                </p>
                <div id = "resp_exc_MDB"></div>

            </div>
            <div className = "conteudo3_exc_MDB">
                <p id = "result_exc_MDB">
                    Listar Informaçoes
                </p>
                
                <button type="button" id="botaoLA_exc_MDB" onClick={MostrarAluno}>Listar Alunos</button>
                <div id="res_exc_MDB">
                    <ol id="res1_exc_MDB">
                        {
                            execucaoA && <ListarAlunoMDB/>
                        }
                        
                    </ol>
                </div>
            </div>
        </div>
        </div>
        
    )
}


export default ExcluirMDB;