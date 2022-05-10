import './App.css';
import React from 'react';
import { createContext } from 'react';
import { HashRouter, Route, Routes} from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import CreateAccount from "./Components/createaccount";
import AllData from "./Components/alldata";

export const UserContext = createContext(null);

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'jan',email:'jan@mit.edu',password:'password',balance:1000}]}}>
        <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/CreateAccount/" element={<CreateAccount />}></Route>
          <Route path="/deposit/" element={<Deposit />}></Route>
          <Route path="/withdraw/" element={<Withdraw />}></Route>
          <Route path="/alldata/" element={<AllData />}></Route>
        </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>

  );
}

export default App;
