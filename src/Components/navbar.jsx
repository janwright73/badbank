import React from 'react';



function NavBar(){
  
  function handleClick(event, id){
    //console.log('hi');
    var current = document.getElementsByClassName("active");
  
                    if(current != null){
                      current[0].className = current[0]
                      .className.replace(" active", "");
                    }

               // console.log(event.target.id);  
    var newActive = document.getElementById(event.target.id);              
    newActive.className += " active";
    
  }


  return(
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    
      <a className="navbar-brand active" id="homvenav" data-bs-toggle="tooltip" title="Navigate Home" placement="bottom" href="#/" onClick={e => handleClick(e)}>Bad Bank</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" id="accountnav" data-bs-toggle="tooltip" title="Create new accounts" placement="bottom" href="#/CreateAccount/" onClick={e => handleClick(e)}>Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="depositnav" data-bs-toggle="tooltip" title="Make a deposit" placement="bottom" href="#/deposit/" onClick={e => handleClick(e)}>Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="widthdrawnav" data-bs-toggle="tooltip" title="Withdraw money" placement="bottom" href="#/withdraw/" onClick={e => handleClick(e)}>Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="alldatanav" data-bs-toggle="tooltip" title="View all user data" placement="bottom" href="#/alldata/" onClick={e => handleClick(e)}>All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    
    </>
  );
}

export default NavBar;
