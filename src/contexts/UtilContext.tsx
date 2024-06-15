import { createContext } from "react";
import { flatten } from "flat";

const Utils = {
    flatten: flatten
}
export const UtilContext = createContext(Utils);
