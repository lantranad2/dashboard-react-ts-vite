import { createContext, useReducer } from "react";

interface AppState {
  openSidebar: boolean;
}

interface AppAction {
  type: "OPEN-SIDEBAR" | "CLOSE-SIDEBAR";
}

const initialState = {
  openSidebar: false,
};

interface ContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "OPEN-SIDEBAR":
      return { ...state, openSidebar: true };
    case "CLOSE-SIDEBAR":
      return { ...state, openSidebar: false };
    default:
      return state;
  }
};

const AppContext = createContext({} as ContextType);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
