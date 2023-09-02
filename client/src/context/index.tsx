
import React from 'react';

const Contexto = React.createContext({});


export function Provedor({children}:Children){
    return(
        <Contexto.Provider value={{

        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto);