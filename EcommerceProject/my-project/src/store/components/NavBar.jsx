import React from 'react'

function NavBar() {
  return (
    <>
    <div className="navSection">
        {/* Title */}
        <div className="title">
            <h2>MyMart</h2>
        </div>
        {/* search */}
        <div className="search">
            <input type="search" name="" id="" />
        </div>
        {/* user and cart */}
        <div className="user">
            <div className="user-details">
                SignIn/SignUp
            </div>
            {/* cart */}
            <div className="cart">Cart</div>
        </div>

       
        


    </div>
     {/* Displayin the elemennts */}
    <div className="subMenu">
            <ul>
                <li>Mobiles</li>
                <li>Computers</li>
                <li>Watches</li>
                <li>WomenFashion</li>
                <li>Men Fashion</li>
                <li>Ac</li>
                <li>Furniture</li>
                <li>Fridges</li>
                <li>Books</li>
                <li>Speakers</li>
                <li>Kitchen</li>
                <li>Tv</li>
                
                
            </ul>
        </div>
        
    </>
  )
}

export default NavBar