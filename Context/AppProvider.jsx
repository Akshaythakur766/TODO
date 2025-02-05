import { useState, createContext } from 'react';

export const Context = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); 

  return (
    <Context.Provider value={{ mode, setMode }}>
      {children}
    </Context.Provider>
  );
};

export default AppProvider;
