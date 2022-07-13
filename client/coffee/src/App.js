import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
