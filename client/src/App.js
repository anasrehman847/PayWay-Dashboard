
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard";
import Transactions from "scenes/transactions";
import Login from "scenes/Login";
import SignUp from "scenes/Registration";
import Stepper from "./components/Stepper"

function App() {

  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* <Route path="/" element={<Stepper />} /> */}
            <Route path="/signup" element={< SignUp />} />
            <Route path="/login" element={< Login />} />
            <Route element={<Layout />} >
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
