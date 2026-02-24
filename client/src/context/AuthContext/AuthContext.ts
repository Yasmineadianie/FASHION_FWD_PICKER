import { createContext } from "react";
import {type ContextProviderProps } from "./AuthContextProvider";

export const AuthContext = createContext <ContextProviderProps |undefined >(undefined)