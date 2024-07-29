import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
