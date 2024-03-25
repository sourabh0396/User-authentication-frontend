import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import UserDetails from "./Components/userDetails";
import ImageUpload from "./ImageUpload";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;


// // import logo from './logo.svg';
// // import './App.css';


// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// // import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // import Register from './Components/Register';
// import Login from './Components/Login';
// import Register from './Components/Register';

// function App() {

//   return (
//     <main className="App">
//       <Register />
//     </main>
//   );
// }

// export default App;