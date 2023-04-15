import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignInPage from "./pages/SIgnIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignInPage />} />
    </Routes>
  );
}

export default App;