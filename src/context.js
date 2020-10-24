import React from "react";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const friends = [
    { name: "friend #1", age: "25", imageCategory: "beach" },
    { name: "friend #2", age: "26", imageCategory: "forest" },
    { name: "friend #3", age: "27", imageCategory: "mountain" },
    { name: "friend #4", age: "28", imageCategory: "beach" },
    { name: "friend #5", age: "29", imageCategory: "forest" },
    { name: "friend #6", age: "30", imageCategory: "mountain" },
    { name: "friend #7", age: "31", imageCategory: "beach" },
    { name: "friend #8", age: "32", imageCategory: "forest" },
    { name: "friend #9", age: "33", imageCategory: "mountain" },
    { name: "friend #10", age: "34", imageCategory: "beach" },
  ];

  return (
    <GlobalContext.Provider value={friends}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
