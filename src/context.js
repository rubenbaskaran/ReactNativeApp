import React from "react";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value="hello world!">
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
