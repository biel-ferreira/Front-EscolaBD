
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
// import Menu from "./components/menu";
import React, { useState } from "react";
import CtdSQL from './components/ctdSQL';
import CtdMDB from './components/ctdMDB';
import Home from './components/Home';




function App() {

  const [sql, setSql] = useState(false);
  const[home, setHome] = useState(true);

    const conteudoSQL = () =>{
      
        setSql(true)
        setMdb(false)
        setHome(false)

    }
    const [mdb, setMdb] = useState(false);

    const conteudoMDB = () =>{
        setMdb(true)
        setSql(false)
        setHome(false)
        
    }


  const matric = () =>{


    if(sql){
      document.querySelector("#mat").style.display = "block";
      document.querySelector("#att").style.display = "none";
      document.querySelector("#exc").style.display = "none";
    }

    if(mdb){
      document.querySelector("#mat_MDB").style.display = "block";
      document.querySelector("#att_MDB").style.display = "none";
      document.querySelector("#exc_MDB").style.display = "none";
    }

}

  const att = () =>{

    if(sql){
    document.querySelector("#mat").style.display = "none";
    document.querySelector("#att").style.display = "block";
    document.querySelector("#exc").style.display = "none";
    }
 
    if(mdb){
    document.querySelector("#mat_MDB").style.display = "none";
    document.querySelector("#att_MDB").style.display = "block";
    document.querySelector("#exc_MDB").style.display = "none";
    }
}
  const exc = () =>{

    
    if(sql){
    document.querySelector("#mat").style.display = "none";
    document.querySelector("#att").style.display = "none";
    document.querySelector("#exc").style.display = "block";
    }

    
    
    if(mdb){
    document.querySelector("#mat_MDB").style.display = "none";
    document.querySelector("#att_MDB").style.display = "none";
    document.querySelector("#exc_MDB").style.display = "block";
    }
}
  
  return (
    
    <div className="App">
        
        <Header/>
        <nav id="menu">
        <ul>
            <li><a href="#menu" onClick={conteudoSQL}>  MySQL  </a></li>
            <li><a href="#menu" onClick={matric}>  Matricular Aluno  </a></li>
            <li><a href="#menu" onClick={att}>  Atualizar Aluno  </a></li>
            <li><a href="#menu" onClick={exc}>  Excluir Aluno  </a></li>
            <li><a href="#menu" onClick={conteudoMDB}>  MongoDB  </a></li>
        </ul>
        </nav>
        <div className = "sqlmongo"></div>
        <div>
          {
            home && <Home/>
          }
        {
          sql && <CtdSQL/>
        }
        {
          mdb && <CtdMDB/>
        }
        </div>
        
        <Footer/>
    </div>
  );
}

export default App;
