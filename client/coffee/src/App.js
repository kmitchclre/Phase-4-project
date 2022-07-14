import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CoffeePage from "./components/CoffeePage";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import { useAuth, AuthProvider } from "./useAuth";

const PrivateRoute = ({ redirectPath, children }) => {
  const auth = useAuth();
  console.log(auth.user, redirectPath, children);
  if (!auth.user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [coffeeData, setCoffeeData] = useState([]);

  //.then((res) => res.json())
  //.then((data) => data);

  // useEffect(() => {
  //   fetch("http://localhost:3000/auth").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setCurrentUser(user));
  //     }
  //   });
  // }, []);

  // if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;
  // const user = false;

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/CoffeePage"
              element={
                <PrivateRoute redirectPath="/">
                  <CoffeePage />
                </PrivateRoute>
              }
            />
            <Route path="/SignUpForm" element={<SignUpForm />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
