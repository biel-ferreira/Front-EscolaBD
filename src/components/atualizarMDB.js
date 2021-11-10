import React, { useState } from "react";
import AtualizarAluno from "./routes/MDB/AtualizarAlunoMDB";
import ListarAlunoMDB from "./routes/MDB/listarAlunoMDB";

const AtualizarMDB = () => {
    const [execucaoA, setExecucaoA] = useState(false);

    const MostrarAluno = () =>{
        setExecucaoA(true)
        
    }

    return (
        <div id = "att_MDB">
        <div id = "conteudo1_att_MDB">
            <div className = "conteudo2_att_MDB">
                <p className = "titulo_att_MDB" type = "text">MongoDB - Atualizar</p>
                <p className = "texto1_att_MDB">Nome do Aluno :
                    <input type="text" id="nome_att_MDB" name="dados"></input> ID :  <input type="text" id="id_aluno_att_MDB" name="dados"></input>
                </p>
               
                <p className = "texto3_att_MDB" type = "text">
                    
                    <AtualizarAluno/>
                </p>
                <div id = "resp_att_MDB"></div>

            </div>
            <div className = "conteudo3_att_MDB">
                <p id = "result_att_MDB">
                    Listar Informaçoes
                </p>
                
                <button type="button" id="botaoLA_att_MDB" onClick={MostrarAluno}>Listar Alunos</button>
                <div id="res_att_MDB">
                    <ol id="res1_att_MDB">
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


export default AtualizarMDB;