import React, { useState } from "react";
import AtualizarAluno from './routes/MySQL/AtualizarAluno';
import ListarTurma from "./routes/MySQL/listarTurma";
import ListarMatricula from "./routes/MySQL/listarMatricula";
import ListarAluno from './routes/MySQL/listarAluno';

const Atualizar = () => {

    const [execucaoA, setExecucaoA] = useState(false);

    const MostrarAluno = () =>{
        setExecucaoA(true)
        setExecucaoT(false)
        setExecucaoM(false)
    }

    const [execucaoT, setExecucaoT] = useState(false);

    const MostrarTurma = () =>{
        setExecucaoT(true)
        setExecucaoA(false)
        setExecucaoM(false)
    }
    const [execucaoM, setExecucaoM] = useState(false);

    const MostrarMatricula = () =>{
        setExecucaoM(true)
        setExecucaoT(false)
        setExecucaoA(false)
    }


    return(
        <div id="att">
            <div className = "conteudo2_att">
                <p className = "titulo_att" type = "text">MYSQL - Atualizar</p>
                <p className = "texto1_att">Nome do Aluno :
                    <input type="text" id="nome_att" name="dados"></input> ID : <input type="text" id="id_aluno_att" name="dados"></input>
                </p>
                
                <p className = "texto3_att" type = "text">
                    
                    <AtualizarAluno/>
                    
                </p>
                <div id = "resp_att"></div>

            </div>
            <div className = "conteudo3_att">
                <p id = "result_att">
                    Listar Informaçoes
                </p>
                <button type="button" id="botaoLM_att" onClick={MostrarMatricula}>Listar Matriculas</button>
                <button type="button" id="botaoLT_att" onClick={MostrarTurma}>Listar Turmas</button>
                <button type="button" id="botaoLA_att" onClick={MostrarAluno}>Listar Alunos</button>
                <div id="res_att">
                    <ol id="res1_att">
                    {
                            execucaoA && <ListarAluno/>
                        }
                        {
                            execucaoT && <ListarTurma/>
                        }
                        {
                            execucaoM && <ListarMatricula/>
                        }
                    </ol>
                </div>
            </div>
        </div>
        
    )
}

export default Atualizar;