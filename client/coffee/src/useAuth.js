import React from "react";

let AuthContext = React.createContext();

function AuthProvider({ children }) {
  const preexisting = JSON.parse(window.localStorage.getItem("user"));
  let [user, setUser] = React.useState(preexisting);

  let signin = (username, password, callback, errorCbk) => {
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        window.localStorage.setItem("user", JSON.stringify(data));
        callback();
      })
      .catch((e) => errorCbk(e));
  };

  let logout = () => {
    return fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.localStorage.removeItem("user");
        setUser(null);
      })
      .catch((e) => console.log(e.message));
  };

  //let signout = (callback: VoidFunction) => {
  //  return fakeAuthProvider.signout(() => {
  //    setUser(null);
  //    callback();
  //  });
  //};

  let value = { user, signin, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth, AuthProvider };
