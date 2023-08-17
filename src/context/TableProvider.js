import { createContext, useState, useEffect } from "react";


const TableContext = createContext({});

export const TableProvider = ({ children }) => {
    const [ refresh, setRefresh] = useState(false);
    useEffect(() => {
        setRefresh(false)
        setRefresh({refresh});

      }, []);
    
    return (
        <TableContext.Provider value={{refresh, setRefresh}}>
            {children}
        </TableContext.Provider>
    );
}
export default TableContext;