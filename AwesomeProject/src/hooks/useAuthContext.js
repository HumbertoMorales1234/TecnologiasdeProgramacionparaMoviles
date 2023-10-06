import { useContext } from "react";
import { AuthContext } from "../context/AuchContex";

export const useAuthContext = () => useContext(AuthContext)