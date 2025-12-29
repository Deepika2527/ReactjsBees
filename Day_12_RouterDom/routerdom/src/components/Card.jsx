import React from 'react';

import mobile from  '../assets/images/mobile.jpg'
function Card() {
  return (
    <div className='container d-flex justify-content-between gap-2 flex-wrap m-3'>
        {/* card 1 */}
        <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>

{/* card 2 */}
    <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>
{/* card 3 */}

    <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>

    <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>
    <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>
    <div className="card" style={{width: '18rem'}}>
  <img src={mobile} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert('Added to the cart')}>Add to Cart</a>
  </div>
</div>

    </div>
  )
}

export default Card