import React, {createContext, useState} from 'react';

export const Context = createContext();

function ContextProvider({children}) {
    const [open, setOpen] = useState(false);

    return (
    <Context.Provider 
    value={{
        open,
        setOpen
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default ContextProvider