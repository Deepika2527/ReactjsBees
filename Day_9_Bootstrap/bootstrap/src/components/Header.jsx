import React from 'react'

function Header() {
  return (
    <>
    <nav className='navbar navbar-expand-lg  bg-light border-bottom m-2'>

    <div className="container-fluid ">
    {/* Brand Name */}
    <a href="#" className='navbar-brand fw-bold'>
        Mycart
    </a>

    <img src="https://images.pexels.com/photos/3444345/pexels-photo-3444345.png" alt="navimg" width="70" height="70px" className='img-fluid rounded ms-2'/>


    <span>Its all About--Online shopping</span>

    <nav>
        <ul className='d-flex gap-4 list-unstyled m-0 p-0'>
            <li>Clothing</li>
            <li>Footware</li>
            <li>Makeup</li>
            <li>Skin care</li>
        </ul>
    </nav>

        
    </div>

    </nav>
    
     
    </>
  )
}

export default Header