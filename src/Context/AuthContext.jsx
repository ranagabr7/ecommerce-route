import { createContext, useEffect, useState } from "react";
export const authContext = createContext();

export default function AuthContextProvider({children}) {
const [token, setToken] = useState(null)
useEffect(()=>{
if(localStorage.getItem("tKn") !== null){
    setToken(localStorage.getItem("tKn"))
}
},[])
  return (
    <>
  <authContext.Provider value={{token,setToken}}>
    {children}
  </authContext.Provider>
    </>
  );
}
