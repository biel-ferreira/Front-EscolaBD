
import React, { useState } from "react";
import ExcluirAluno from './routes/MySQL/ExcluirAluno';
import ListarTurma from "./routes/MySQL/listarTurma";
import ListarMatricula from "./routes/MySQL/listarMatricula";
import ListarAluno from './routes/MySQL/listarAluno';

const Excluir = () => {

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
        <div id="exc">
            <div className = "conteudo2_exc">
                <p className = "titulo_exc" type = "text">MYSQL - Excluir</p>
                <p className = "texto1_exc">Nome do Aluno :
                    <input type="text" id="nome_exc" name="dados"></input> ID : <input type="number" id="id_aluno_exc" name="dados"></input>
                </p>
                
                <p className = "texto3_exc" type = "text">
                   
                    <ExcluirAluno/>
                </p>
                <div id = "resp_exc"></div>

            </div>
            <div className = "conteudo3_exc">
                <p id = "result_exc">
                    Listar Informaçoes
                </p>
                <button type="button" id="botaoLM_exc" onClick={MostrarMatricula}>Listar Matriculas</button>
                <button type="button" id="botaoLT_exc" onClick={MostrarTurma}>Listar Turmas</button>
                <button type="button" id="botaoLA_exc" onClick={MostrarAluno}>Listar Alunos</button>
                <div id="res_exc">
                    <ol id="res1_exc">
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

export default Excluir;