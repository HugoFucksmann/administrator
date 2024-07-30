import React from "react";
import { Provider, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "styled-components";
import "./scrollbarStyle.css";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

const queryClient = new QueryClient();

const ThemeWrapper = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeWrapper>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </ThemeWrapper>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
