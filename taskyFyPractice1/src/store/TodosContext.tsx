import { createContext, ReactNode } from "react";

export interface TodoPropsProvider {
  children: ReactNode;
}

export const TodosContext = createContext<any>(null);

export const TodosProvider = ({ children }: TodoPropsProvider) => {
  return <TodosContext.Provider value={null}>{children}</TodosContext.Provider>;
};
