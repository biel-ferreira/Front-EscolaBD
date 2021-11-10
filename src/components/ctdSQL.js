import React from "react";

import Excluir from "./excluir";
import Matricular from "./matricular";
import Atualizar from "./atualizar";

const ctdSQL = () => {
    
    return (
        <div>
        <Matricular/>
        <Excluir/>
        <Atualizar/>
        </div>
    )
}

export default ctdSQL;