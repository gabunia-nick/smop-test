import { createContext, useMemo, useState } from "react";

type LogsContextType = {
  columns: { id: string; text: string }[] | null;
  level: string;
  setColumns: (columns: { id: string; text: string }[]) => void;
  setLevel: (level: string) => void;
}

const LogsContext = createContext<LogsContextType | null>(null);

const LogsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [columns, setColumns] = useState<{ id: string; text: string }[] | null>(null);
  const [level, setLevel] = useState('all');

  const contextValue = useMemo(() => ({
    columns,
    level,
    setColumns,
    setLevel
  }), [columns, level]);

  return <LogsContext.Provider value={contextValue}>{children}</LogsContext.Provider>
};

export default LogsContextProvider;
