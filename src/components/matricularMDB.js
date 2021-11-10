import React, { useState } from "react";

import CriarAluno from "./routes/MDB/criarAlunoMDB";
import ListarAlunoMDB from "./routes/MDB/listarAlunoMDB"

const MatricularMDB = () => {
    const [execucaoA, setExecucaoA] = useState(false);

    const MostrarAluno = () =>{
        setExecucaoA(true)
        
    }

    return (
        <div id = "mat_MDB">
        <div id = "conteudo1_mat_MDB">
            <div className = "conteudo2_mat_MDB">
                <p className = "titulo_mat_MDB" type = "text">MongoDB - Matricular</p>
                <p className = "texto1_mat_MDB">Nome do Aluno :
                    <input type="text" id="nome_mat_MDB" name="dados"></input> ID :  <input type="text" id="id_aluno_mat_MDB" name="dados"></input>
                </p>
                <CriarAluno/>
                <p className = "texto3_mat_MDB" type = "text">
                    
                
                </p>
                <div id = "resp_mat_MDB"></div>

            </div>
            <div className = "conteudo3_mat_MDB">
                <p id = "result_mat_MDB">
                    Listar Informaçoes
                </p>
                
                <button type="button" id="botaoLA_mat_MDB" onClick={MostrarAluno}>Listar Alunos</button>
                <div id="res_mat_MDB">
                    <ol id="res1_mat_MDB">
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


export default MatricularMDB;