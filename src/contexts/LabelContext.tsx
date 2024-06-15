import { createContext } from "react";
import { LabelUtil } from "../utils/LabelUtil";

export const LabelContext = createContext( (new LabelUtil()))