import React from "react";

import Excluir from "./excluirMDB";
import Matricular from "./matricularMDB";
import Atualizar from "./atualizarMDB";

const ctdMDB = () => {
    
    return (
        <div>
        <Matricular/>
        <Excluir/>
        <Atualizar/>
        </div>
    )
}

export default ctdMDB;