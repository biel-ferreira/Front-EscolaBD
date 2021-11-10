import React, { useState } from "react";
import ListarAluno from './routes/MySQL/listarAluno';
import CriarAluno from "./routes/MySQL/criarAluno";
import ListarTurma from "./routes/MySQL/listarTurma";
import ListarMatricula from "./routes/MySQL/listarMatricula";

function Matricular(){
    // document.getElementById("botaoLA").onclick = function(){
    //        const listaraluno = <Listar/>
    //         return listaraluno
    //     }

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
        
            
        
        <div id="mat">
            
           
           <div className = "conteudo2">
                <p className = "titulo" type = "text">MYSQL - Matricular</p>
                <p className = "texto1">Nome do Aluno :
                    <input type="text" id="nome" name="dados"></input>
                </p>
                <p className = "texto2" type = "text">Turma do Aluno :
                    <input type="text" id="turma" name="dados"></input>
                </p>
                <p className = "texto3" type = "text">
                    
                    {/* <button type="button" id="botaoM" onClick={mAluno}>Matricular</button> */}
                </p>
                <CriarAluno/>
                <div id = "resp">
            
                </div>
               

            </div>
            <div className = "conteudo3">
                <p id = "result">
                    Listar Informaçoes
                </p>
                <button type="button" id="botaoLM" onClick={MostrarMatricula}>Listar Matriculas</button>
                <button type="button" id="botaoLT" onClick={MostrarTurma}>Listar Turmas</button>
                <button type="button" id="botaoLA" onClick={MostrarAluno}>
                Listar Alunos</button>
                <div id="res">
                    <ol id="res1">
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


export default Matricular;