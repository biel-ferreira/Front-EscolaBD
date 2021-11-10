import React from 'react';

const Menuhtml = () => {

    const matric = () =>{

        document.querySelector("#mat").style.display = "block";
        document.querySelector("#att").style.display = "none";
        document.querySelector("#exc").style.display = "none";

    }

    const att = () =>{

        document.querySelector("#mat").style.display = "none";
        document.querySelector("#att").style.display = "block";
        document.querySelector("#exc").style.display = "none";

    }
    const exc = () =>{

        document.querySelector("#mat").style.display = "none";
        document.querySelector("#att").style.display = "none";
        document.querySelector("#exc").style.display = "block";

    }
    return (
 
    <nav id="menu">
        <ul>
            <li><a href="#menu" onClick={exc}>  MySQL  </a></li>
            <li><a href="#menu" onClick={matric}>  Matricular Aluno  </a></li>
            <li><a href="#menu" onClick={att}>  Atualizar Aluno  </a></li>
            <li><a href="#menu" onClick={exc}>  Excluir Aluno  </a></li>
            <li><a href="#menu" onClick={exc}>  MongoDB  </a></li>
        </ul>
    </nav>
    )
}

export default Menuhtml;