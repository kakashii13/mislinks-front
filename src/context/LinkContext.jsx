import { useState, createContext, useContext, useEffect } from "react";
import { setToken } from "../service/links";

const linkContext = createContext();

export const useLinkContext = () => useContext(linkContext);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const userLogged = localStorage.getItem("mislinksuser");
    if (userLogged) {
      const user = JSON.parse(userLogged);
      setUser(user);
      setToken(user.token);
    } else {
      setUser(null);
    }
  }, []);

  const saveUser = (user) => {
    setUser(user);
  };

  return (
    <linkContext.Provider value={{ user, saveUser }}>
      {children}
    </linkContext.Provider>
  );
};
