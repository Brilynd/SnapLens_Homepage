import './App.css';
import React from "react"
import Navbar from './Components/Navbar';
import Advertisement from './Components/Advertisement';
import HeaderAdvertisement from './Components/HeaderAdvertisement';
import MonthlySubscription from './Components/MonthlySubscriptions';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HeaderAdvertisement/>
      <Advertisement/>
      <MonthlySubscription/>
    </div>
  );
}

export default App;
