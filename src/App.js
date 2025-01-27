import { BrowserRouter } from "react-router";
import MainRouter from "./routes/MainRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
