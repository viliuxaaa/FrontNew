import { useContext } from "react";
import TableContext from "../context/TableProvider";

const useTableContext = () => {
  return useContext(TableContext);
}
export default useTableContext