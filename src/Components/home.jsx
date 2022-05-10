import React from 'react';
import Card from "./card";
import Image from "../images/bank.png";

function Home(){
 

  return (
   
    <Card
      txtcolor="black"
      title="Welcome to Bad Bank"
      text="This site will provide features for all of your banking needs."
      body={(<img src={Image} className="img-fluid" alt="Bank logo"/>)}
    />  
  
  );  
}

export default Home;