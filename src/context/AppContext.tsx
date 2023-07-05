import { createContext, ReactNode, useEffect, useState } from "react";

// Storage
import { changeTheme } from "@storage/changeTheme";
import { getThemeCurrent } from "@storage/getThemeCurrent";

// Interfaces
interface AppContextProps {
  isDarkMode: boolean;
  handleChangeTheme: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  async function handleChangeTheme() {
    await changeTheme(!isDarkMode)

    setIsDarkMode(!isDarkMode);
  }

  async function fetchThemeCurrent() {
    const themeCurrent = await getThemeCurrent()

    if(themeCurrent) {
      setIsDarkMode(themeCurrent)
    }
    
  }

  useEffect(() => {
    fetchThemeCurrent()
  }, [])

  return (
    <AppContext.Provider value={{ isDarkMode, handleChangeTheme }}>
      {children}
    </AppContext.Provider>
  )
}