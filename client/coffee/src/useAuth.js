import React from "react";

let AuthContext = React.createContext();

function AuthProvider({ children }) {
  const preexisting = JSON.parse(window.localStorage.getItem("user"));
  let [user, setUser] = React.useState(preexisting);

  let signin = (username, password, callback, errorCbk) => {
    return (
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          if (res.ok) {
            setUser(res);
            window.localStorage.setItem("user", JSON.stringify(res));
            callback();
          } else {
            res.json().then((e) => errorCbk(e));
            //res.json().then((e) => console.log(e));
          }
        })

        //);

        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          //if (res.ok) {
          //}
        })
    );
  };

  //let signout = (callback: VoidFunction) => {
  //  return fakeAuthProvider.signout(() => {
  //    setUser(null);
  //    callback();
  //  });
  //};

  let value = { user, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth, AuthProvider };
