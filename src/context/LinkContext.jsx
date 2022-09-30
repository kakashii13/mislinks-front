import React, { useState, createContext, useContext, useEffect } from "react";
import { setToken } from "../service/links";

const linkContext = createContext();

export const useLinkContext = () => useContext(linkContext);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const getToLocal = () => {
      const user = JSON.parse(localStorage.getItem("mislinksuser"));
      setUser(user);
      setToken(user.token);
    };
    getToLocal();
  }, []);

  return (
    <linkContext.Provider value={{ user, saveUser }}>
      {children}
    </linkContext.Provider>
  );
};
