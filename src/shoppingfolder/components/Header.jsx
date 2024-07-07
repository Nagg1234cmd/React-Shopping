import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'> 
        <div className='title'> 

        <h2>Shopping mall</h2>
        </div>
        </div>
        <div className='center'>
            <ul>
                <li> Men</li>
                <li>Women</li>
                <li>Gents</li>
                <li> Childeren</li>
            </ul>
        </div>
        
        <div className="search">
            <input type="text" placeholder="search"></input>
        </div>
        <div className='right'>
            <div className="signin">
                signin/signup
            </div>
            <div className='cart'>
cart
            </div>
        </div>
      
    </div>
  )
}

export default Header
