import { Stack } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { ContextProvider } from "./context/LinkContext";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <Stack>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Stack>
  );
}

export default App;
