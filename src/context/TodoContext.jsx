import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <TodoContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  return useContext(TodoContext);
};
