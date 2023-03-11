import React from 'react';

function Header({ scoreBingo }) {

  return (
    <div className='topbar'>
	  <div className='heading-div'>
	    <p className='heading'>Bingo game</p>
	  </div>
      
	  <div className='counter'>
	  <a id="random-figure">BINGO Counter: {scoreBingo} </a>
	  </div>
    </div>
  );
}

export default Header;