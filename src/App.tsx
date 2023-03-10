import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };
  return (
    <EuiProvider>
      <EuiThemeProvider modify={overrides}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
  );
}
