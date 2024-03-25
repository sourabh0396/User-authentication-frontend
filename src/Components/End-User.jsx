import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";



const [user, setUser] = useState(null);

const handleRegister = (user) => {
    setUser(user);
};
 const handleLogin = (user) => {
    setUser(user);
};
export default function EndUser(){
    return (
        <div>
          {user ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onRegister={handleRegister} />
          )}
        </div>
      );
}