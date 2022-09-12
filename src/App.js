import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
